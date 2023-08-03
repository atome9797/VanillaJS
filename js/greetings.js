


const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const link = document.querySelector("a")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY ="username"

function onLoginSubmit(event) { //콜백으로 이벤트에 대한 정보를 가져온다.
    //submit 이벤트 실행시 form의 기본동작 호출되는것을 방지한다.
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value
    //로컬 저장소에 저장
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
    console.log(username)
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

function handleLinkEvent(event) {
    //click 이벤트 실행시 link의 기본 동작 호출되는것을 방지한다.
    event.preventDefault()
    console.log(event)
    alert('asd')
}   

link.addEventListener("click", handleLinkEvent)

//유저이름이 있으면 입력창이 없어지게 설정
const savedUsername = localStorage.getItem(USERNAME_KEY)
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername)
}
