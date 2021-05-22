function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let humNumber = Math.round(response.data.main.humidity);
  let weatherDes = response.data.weather[0].description;
  let windSpeed = Math.round(response.data.wind.speed);
  let showHum = document.querySelector("span.humidity-percentage");
  let showCel = document.querySelector("span.temp");
  let showDes = document.querySelector("#weather-description");
  let showWindspeed = document.querySelector("span.wind-speed");
  celsiusTemp = response.data.main.temp;
  showWindspeed.innerHTML = `${windSpeed} m/s`;
  showHum.innerHTML = `${humNumber} %`;
  showCel.innerHTML = temperature;
  showDes.innerHTML = weatherDes;
}

function showCity(event) {
  event.preventDefault();
  let header = document.querySelector("#appear-city");
  let cityName = document.querySelector("#city-name");
  header.innerHTML = cityName.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=e45e9e8d6214d5b1940ffacb75074bb9&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
let formCityName = document.querySelector("#city-form");
formCityName.addEventListener("submit", showCity);

function showFah(event) {
  event.preventDefault();
  let showFah = document.querySelector("span.temp");
  let fahTemp = (celsiusTemp * 9) / 5 + 32;
  showFah.innerHTML = Math.round(fahTemp);
}
let clickFah = document.querySelector("a.fah");
clickFah.addEventListener("click", showFah);

function showCel(event) {
  event.preventDefault();
  let showCel = document.querySelector("span.temp");
  showCel.innerHTML = Math.round(celsiusTemp);
}
let clickCel = document.querySelector("a.cel");
clickCel.addEventListener("click", showCel);

let celsiusTemp = null;

let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
let year = now.getFullYear();
let date = now.getDate();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

if (minute >= 10) {
  let realTime = document.querySelector("li.time");
  realTime.innerHTML = `${year} ${month} ${date} <br />${day}, ${hour} : ${minute}`;
} else {
  let realTime = document.querySelector("li.time");
  realTime.innerHTML = `${year} ${month} ${date} <br /> ${day}, ${hour} : 0${minute}`;
}
