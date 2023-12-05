let weatherBottom = document.querySelector(".weatherBottom");
let cityInp = document.querySelector(".cityInp");


// const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`;
let form = document.querySelector("form");

function getWeather(curCity) {
  fetch(`https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      drawCards(data);
    });
}
getWeather("Ganja")
form.addEventListener("submit", function (e) {
  e.preventDefault();
  getWeather(cityInp.value)
});

function drawCards(obj) {
  weatherBottom.innerHTML = `
      <p>${obj?.location?.name}, ${obj?.location?.country}</p>
      <img src="${obj?.current?.condition?.icon}" alt="">
      <p>${obj?.current?.condition?.text}</p>
      <p>${obj?.current?.temp_c}</p>
      <p>${obj?.current?.temp_f}</p>
      <p>${obj?.current?.last_updated_epoch}</p>
    `;
}
