let number_of_notes = 0;
const spaceOfNotes = document.createElement('span');
const input = document.getElementById("inputbox");

function add_note() {
    if(number_of_notes === 0) { 
        document.getElementById("emptynote").remove();
        document.getElementById('mainframe').appendChild(spaceOfNotes);
    }
    let listedNote = document.createElement('section');
    listedNote.style.width = "400px";
    listedNote.style.height = "100px";
    listedNote.style.backgroundColor = "hsl(53, 18%, 70%)";
    listedNote.style.marginBottom = "16px";
    listedNote.style.borderRadius= "14px";
    spaceOfNotes.appendChild(listedNote);
    
    
    
    
    number_of_notes += 1;
}