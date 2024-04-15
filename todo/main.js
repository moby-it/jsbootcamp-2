let number_of_notes = 0;
input = document.getElementById("inputbox");

function add_note() {
    if(number_of_notes === 0) { 
        document.getElementById("emptynote").remove();
    }
    let listedNote = document.createElement('section');
    listedNote.style.width = "430px";
    listedNote.style.height = "96px";
    listedNote.style.backgroundColor = "hsl(53, 18%, 70%)";
    listedNote.style.marginBottom = "25px";
    listedNote.style.borderRadius= "12px";
    listedNote.style.display = "flex";
    listedNote.style.alignItems = "center";
    document.getElementById('mainframe').appendChild(listedNote);

    let noteSection = document.createElement('section');
    
    noteSection.style.padding = "32px";
    noteSection.style.height = "114.39px";
    noteSection.style.width = "432px";
    noteSection.style.display = "flex";
    noteSection.style.alignItems = "center";
    noteSection.style.justifyContent = "space-between";
   

    let input = document.getElementById("inputbox");
    let textNote = document.createElement('p'); 
    textNote.style.fontFamily = "IBM Plex Sans";
    textNote.style.marginRight = 
    textNote.textContent = input.value;
    noteSection.appendChild(textNote);
    
    let signSection = document.createElement('section');
    signSection.width = "64";
    signSection.height = "24";
    signSection.style.display = "flex";
    signSection.style.alignItens = "center";

    let tickSign = document.createElement('img');
    tickSign.src = 'images/tick-svgrepo-com.svg'
    tickSign.width = "24";
    tickSign.height = "24";
    tickSign.style.marginRight = "16px";
    signSection.appendChild(tickSign);

    let trashSign = document.createElement('img');
    trashSign.src = 'images/trash-bin-2-svgrepo-com.svg'
    trashSign.width = "24"
    trashSign.height = "24"
    signSection.appendChild(trashSign);

    noteSection.appendChild(signSection);

    listedNote.appendChild(noteSection);

    number_of_notes += 1;

    console.log(input.value);
}
