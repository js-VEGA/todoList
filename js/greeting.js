const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME= "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();//브라우저 기본 동작 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserame = localStorage.getItem(USERNAME_KEY); 

if(savedUserame === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUserame);
}




//먼저 함수를 호출하고 실행하고 있다.
//괄호 안에 정보가 들어있다. 
//정보는 막 일어난 일을 첫번쨰로 보낸다.