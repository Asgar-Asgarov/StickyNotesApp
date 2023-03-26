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


