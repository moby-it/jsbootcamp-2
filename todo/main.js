let number_of_notes = 0;


function add_note() {

    
    if( number_of_notes === 0) {
        document.getElementById('emptynote').remove();
    }

    let listedNote = document.createElement('section');
    listedNote.style.width = "432px";
    listedNote.style.height = "114.39px";
    listedNote.style.backgroundColor = "hsl(53, 18%, 70%)";
    listedNote.style.marginBottom = "15px";
    listedNote.style.borderRadius= "12px";
    listedNote.style.display = "flex";
    listedNote.style.alignItems = "center";
    document.getElementById('mainframe').appendChild(listedNote);

    let noteSection = document.createElement('section');
    
    noteSection.style.padding = "18px 16px";
    noteSection.style.height = "114.39px";
    noteSection.style.width = "432px";
    noteSection.style.display = "flex";
    noteSection.style.alignItems = "center";
    noteSection.style.justifyContent = "space-between";
   

    let input = document.getElementById("inputbox");
    let textNote = document.createElement('p'); 
    textNote.style.fontFamily = "IBM Plex Sans";
    textNote.style.size = "15px";
    textNote.textContent = input.value;
    textNote.style.color = "hsl(261, 56%, 18%);"
    input.value = "";
    noteSection.appendChild(textNote);
    
    let signSection = document.createElement('section');
    signSection.width = "64";
    signSection.height = "24";
    signSection.style.display = "flex";
    signSection.style.alignItens = "center";
    signSection.style.justifyContent = "space-between";

    function noteDone() {
        textNote.style.textDecorationLine = "line-through";
    }

    let tickSign = document.createElement('img');
    tickSign.addEventListener("click", noteDone);
    tickSign.src = 'images/tick-svgrepo-com (3).svg'
    tickSign.width = "25";
    tickSign.height = "25";
    //tickSign.style.paddingTop = "3px";
    tickSign.style.marginRight = "14px";
    signSection.appendChild(tickSign);

    function noteRemove() {
        listedNote.remove();
        number_of_notes -= 1;
        if( number_of_notes === 0 ) {
           let noNotes = document.createElement('p');
           noNotes.textContent = "There are no notes"
           noNotes.style.color = "hsl(0, 0%, 90%)";
           noNotes.style.fontFamily = "IBM Plex Sans";
           noNotes.style.textAlign = "center";
           noNotes.setAttribute("id", "emptynote");
           document.getElementById("mainframe").appendChild(noNotes);
           console.log("done");
        }
        console.log(number_of_notes);
    }

    let trashSign = document.createElement('img');
    trashSign.addEventListener("click", noteRemove);
    trashSign.src = 'images/trash-bin-2-svgrepo-com.svg';
    trashSign.width = "26";
    trashSign.height = "26";
    trashSign.style.fill = "red";
    signSection.appendChild(trashSign);
    
    noteSection.appendChild(signSection);

    listedNote.appendChild(noteSection);

    number_of_notes += 1;

    console.log(number_of_notes);
}



