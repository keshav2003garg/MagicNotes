showNotes()
let addBtn = document.getElementById("addBtn");
let addTxt = document.getElementById("floatingTextarea2");
addBtn.addEventListener("click", function(){
    let notes = localStorage.getItem("notes");
    let notesObj
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes()
})


function showNotes() {
    let notes = localStorage.getItem("notes");
    let notesObj
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        html+=`<div class="noteCard my-2 mx-2" style="width: 18rem;">
        <div class="card-body" id="${index}">
        <h5 class="card-title">Note ${index+1}</h5>
        <p class="card-text">${element}</p>
        <button href="#" class="btn btn-primary" id="${index}" onclick= "deleteNotes(this.id)">Delete</button>
        </div>
        </div>`;
    })
    let notesElem = document.getElementById("notes")
        if(notesObj.length!=0){
            notesElem.innerHTML=html
        }
        else{
            notesElem.innerHTML= ""
        }
}


function deleteNotes(index){
    let notes = localStorage.getItem("notes");
    let notesObj
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes()
}


let searchTxt= document.getElementById("searchTxt")
searchTxt.addEventListener("input",function() {
    let inputVal= searchTxt.value
    let noteCard= document.getElementsByClassName("noteCard")
    Array.from(noteCard).forEach(function(element) {
        let cardTxt= element.getElementsByTagName("p")[0].textContent;
        if(cardTxt.includes(inputVal)){
            element.style.display= "block"
        }
        else{
            element.style.display= "none"
        }
    })
})