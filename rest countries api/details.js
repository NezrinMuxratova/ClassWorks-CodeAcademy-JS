const BASE_URL=`https://restcountries.com/v3.1/name`
let countriesCard = document.querySelector(".countriesCard");
let nameValue = new URLSearchParams(window.location.search).get("name");
let goBack=document.querySelector(".goBack")
let body = document.querySelector("body");
let btnDark=document.querySelector(".btnDark")
async function getData() {
    let response = await axios(`${BASE_URL}/${nameValue}`);
    console.log(response.data);
    drawCards(response.data);
    card = response.data;
  }

  getData()

  function drawCards(data) {
    countriesCard.innerHTML = "";
  
      countriesCard.innerHTML += `
      
    
      <div class="card d-flex">
      <div class="image">
      <img src="${data[0].flags.svg}" alt="" />
      
      </div>
      <div>
      </div>
      <div class="text d-flex">
          <h5>${data[0].name}:</h5>
          <p>${data[0].population}</p>
      </div>
      <div class="text d-flex">
          
          <h5>Region:</h5>
          <p>${data[0].region}</p>
          </div>
          <div class="text d-flex">
          <h5>Capital:</h5>
          <p>${data[0].capital}</p>
         
      </div>
    </div>
      
      `;
    };
  goBack.addEventListener("click", function(){
    window.history.back()
  })
  localStorage.getItem("dark-mode") === "true" &&
  body.classList.add("dark-mode");

btnDark.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  localStorage.getItem("dark-mode") === "true"
    ? localStorage.setItem("dark-mode", false)
    : localStorage.setItem("dark-mode", true);
});
