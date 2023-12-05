let curCity = "Ganja";
const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`;

let boxWather = document.querySelector("#randomSection");

fetch(`${BASE_URL}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    drawCards(data)
  }).catch((err)=>{
    console.log(err)
  });

function drawCards (element){
    boxWather.innerHTML=""

        boxWather.innerHTML+=`
        <form action="">
          <div class="inputBtn">

            <input type="text" placeholder="city" />
            <div class="button">
              <button>Get Forecast</button>
            </div>
          </div>
          <div class="image">
            <p>${element.location.country}</p>
            <p>${element.current.condition.text.lat}</p>
            <p>${element.location.localtime}</p>
            <p>${element.location.localtime_epoch}</p>
            <p>${element.location.region}</p>
          </div>
        </form>
        `
    
}
