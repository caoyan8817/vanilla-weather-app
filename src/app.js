function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let weatherDes = response.data.weather[0].description;
  let showCel = document.querySelector("span.temp");
  let showDes = document.querySelector("#description");
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
