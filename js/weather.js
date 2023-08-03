const API_KEY = 'c01224a232b2fd5b9d884e97f861c203'

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(res => res.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child")
        const cityContainer = document.querySelector("#weather span:last-child")
        weatherContainer.innerText = data.name
        cityContainer.innerText = data.weather[0].main
    })
}

function onGeoError(){
    alert("can't fine you. No weather for you")
}


//위도 경도 알려주는 내장 api 함수
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)

