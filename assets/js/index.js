window.onload=function(){
 const App = document.getElementById("app");
const btnEl = App.querySelector(".addNote");
}

function getNotes() {
    
    return JSON.parse(localStorage.getItem("sticky-notes") || "[]") ;

}
