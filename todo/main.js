let number_of_notes = 0;
const input = document.getElementById("inputbox");

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
    document.getElementById('mainframe').appendChild(listedNote);
    
    
    
    
    number_of_notes += 1;
}