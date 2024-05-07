let number_of_notes = 0;

function add_note() {

    let note = document.createElement('section');
    note.style.width = "432px";
    note.style.height = "114.39px";
    note.style.backgroundColor = "hsl(53, 18%, 70%)";
    note.style.marginBottom = "15px";
    note.style.borderRadius= "12px";
    note.style.display = "flex";
    note.style.alignItems = "center";
    document.getElementById('mainframe').appendChild(note);

    let noteSection = document.createElement('section');
    
    noteSection.style.padding = "18px 16px";
    noteSection.style.height = "114.39px";
    noteSection.style.width = "432px";
    noteSection.style.display = "flex";
    noteSection.style.alignItems = "center";
    noteSection.style.justifyContent = "space-between";
   

    let input = document.getElementById("inputbox");
    let note_text = document.createElement('p'); 
    note_text.style.fontFamily = "IBM Plex Sans";
    note_text.style.size = "15px";
    note_text.textContent = input.value;
    note_text.style.color = "hsl(261, 56%, 18%);"
    input.value = "";
    noteSection.appendChild(note_text);
    
    let signSection = document.createElement('section');
    signSection.width = "64";
    signSection.height = "24";
    signSection.style.display = "flex";
    signSection.style.alignItens = "center";
    signSection.style.justifyContent = "space-between";

    function noteDone() {
        note_text.style.textDecorationLine = "line-through";
    }

    let tickSign = document.createElement('img');
    tickSign.addEventListener("click", noteDone);
    tickSign.src = 'images/check.svg'
    tickSign.width = "25";
    tickSign.height = "25";
    tickSign.style.marginRight = "14px";
    signSection.appendChild(tickSign);

    function noteRemove() {
        note.remove();
        number_of_notes -= 1;
        if( number_of_notes === 0 ) {
           let noNotes = document.createElement('p');
           noNotes.textContent = "There are no notes"
           noNotes.style.color = "hsl(0, 0%, 90%)";
           noNotes.style.fontFamily = "IBM Plex Sans";
           noNotes.style.textAlign = "center";
           noNotes.setAttribute("id", "empty");
           document.getElementById("mainframe").appendChild(noNotes);
           console.log("done");
        }
        console.log(number_of_notes);
    }

    let trashSign = document.createElement('img');
    trashSign.addEventListener("click", noteRemove);
    trashSign.src = 'images/trash.svg';
    trashSign.width = "26";
    trashSign.height = "26";
    trashSign.style.fill = "red";
    signSection.appendChild(trashSign);
    
    noteSection.appendChild(signSection);

    note.appendChild(noteSection);

    number_of_notes += 1;

    console.log(number_of_notes); 
}

/* export function handleClick() {
    alert("Button clicked!");
} 

function addNote(){
    console.log("kanw kati");
} */