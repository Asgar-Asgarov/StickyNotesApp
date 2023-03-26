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


function createNoteElement(id,content) {
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.value=content;
    element.placeholder="Empty Sticky note";

    element.addEventListener("change",()=>{
        updateNote(id,element.value)
    });

    element.addEventListener("dblclick",()=>{
      const doDelete = confirm("Are you sure to delete this note?");
      if (doDelete) {
        deleteNote(id,element)
      }
     
    });

  return element;
}

function updateNote(id,newContent) {
  console.log("Updating note...");
  console.log(id,newContent);
    
}

function deleteNote(id,element) {
    console.log("Deleting note...");
    console.log(id,newContent);
}

