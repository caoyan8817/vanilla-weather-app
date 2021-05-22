function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let humNumber = Math.round(response.data.main.humidity);
  let weatherDes = response.data.weather[0].description;
  let windSpeed = Math.round(response.data.wind.speed);
  let showHum = document.querySelector("span.humidity-percentage");
  let showCel = document.querySelector("span.temp");
  let showDes = document.querySelector("#weather-description");
  let showWindspeed = document.querySelector("span.wind-speed");
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
