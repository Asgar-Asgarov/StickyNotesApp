window.onload=function(){
 const App = document.getElementById("app");
const btnEl = App.querySelector(".addNote");
}

// for getting  notes from local storage
function getNotes() {
    
    return JSON.parse(localStorage.getItem("sticky-notes") || "[]") ;

}

function saveNotes(notes) {
    localStorage.setItem("sticky-notes",JSON.stringify(notes))
}


function addNote(params) {
    
}


function createNoteElement(content) {
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.value=content;
    element.placeholder="Empty Sticky note";

    element.addEventListener("change",()=>{
        updateNote(id,element.value)
    });

    element.addEventListener("dblclick",()=>{

    });

  return element;
}

function updateNote(id,newContent) {
console.log("Updating note...");
console.log(id,newContent);
    
}



