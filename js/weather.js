const weather = document.querySelector(".weather span:first-child");
const city = document.querySelector(".weather span:last-child");
const API_KEY = "날씨를 불러오려면 발급받으신 API 키를 입력해주세요.";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("현재 날씨를 조회할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
