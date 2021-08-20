const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");


const USER_LS = "peng",
  SHOWING_CN = "showing";


function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello ${text}`;
}
function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if( currentUser === null){
    input.classList.remove(SHOWING_CN);
    form.classList.add(SHOWING_CN);
  }else{
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}
init();