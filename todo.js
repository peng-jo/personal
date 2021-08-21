const todoForm = document.querySelector(".js-toDoForm"),
  toDoInput = form.querySelector("input"),
  toDoList = document.querySelector(".js-doDoList");

const TODOS_LS = 'toDos';


function paintToDo(text){
  console.log(text);
}
function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
}


function loadToDos(){
  const toDos = localStorage.getItem(TODOS_LS);
  if(toDos !== null){
    
  }
}
function init(){
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();


