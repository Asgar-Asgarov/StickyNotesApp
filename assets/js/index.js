
const App = document.getElementById("app");
const btnEl = App.querySelector(".addNote");


getNotes().forEach((note) => {
    const noteElement = createNoteElement(note.id, note.content);
    App.insertBefore(noteElement, btnEl);
  });

btnEl.addEventListener("click",()=>addNote());

// for getting  notes from local storage
function getNotes() {
    
    return JSON.parse(localStorage.getItem("sticky-notes") || "[]") ;

}

function saveNotes(notes) {
    localStorage.setItem("sticky-notes",JSON.stringify(notes))
}


function addNote(id,content) {
    const notes = getNotes();
    const noteObject = {
        id: Math.floor(Math.random()*10000),
        content:""
    };

    const noteElement = createNoteElement(noteObject.id,noteObject.content);
    App.insertBefore(noteElement,btnEl);

    notes.push(noteObject);
    saveNotes(notes);
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
const notes=getNotes();
const targetNotes = notes.filter((note)=>note.id==id)[0];

targetNotes.content = newContent;
saveNotes(notes);
    
}

function deleteNote(id,element) {
    const notes = getNotes().filter((note) => note.id != id);

    saveNotes(notes);
    App.removeChild(element);
}

