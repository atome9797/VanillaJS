const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "toDos";

let toDos = [];

function saveTodos() {
    //배열을 string 으로 변환해준다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}


function removeButton(event) {
    const li = event.target.parentElement
    //filter 는 true 를 리턴함으로써 배열의 데이터를 가져온다.
    //item !== 3 => 3이 아닐경우 true이므로 3이면 false가 되어 제외된다.
    toDos = toDos.filter((item) => parseInt(li.id) !== item.id)
    li.remove()
    saveTodos()
}

function paintTodo(newTodo) {
    const li = document.createElement("li")
    //li의 id값으로 메모 아이디를 지정한다.
    li.id = newTodo.id
    const span = document.createElement("span")
    const removeBtn = document.createElement("button")
    removeBtn.innerText = "X";
    li.appendChild(span)
    li.appendChild(removeBtn)
    toDoList.appendChild(li)
    span.innerText = newTodo.text

    //버튼 이벤트 구독
    removeBtn.addEventListener("click", removeButton)
}

function Submit(event) {
    event.preventDefault()
    const newTodo = toDoInput.value
    //주소가 아닌 값 할당이라 변화 영향 없음
    toDoInput.value = ""
    //로컬 저장소에 저장
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveTodos()
}


toDoForm.addEventListener("submit", Submit)


//로컬 저장소 불러오기
const savedtoDos = localStorage.getItem(TODOS_KEY)
if(savedtoDos !== null) {
    const parseTodo = JSON.parse(savedtoDos)
    //리스트 주소값을 변경시켜준다.
    toDos = parseTodo
    //parseTodo 아이템을 paintTodo 함수의 매개변수에 전달해준다.
    parseTodo.forEach(paintTodo);
}