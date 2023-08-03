const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();

    //pad함수 : 좌우에 일정 문자열 길이만큼 빈공간에 특정문자를 채워주는 함수
    clock.innerText = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`

}

getClock()
setInterval(getClock, 1000)

