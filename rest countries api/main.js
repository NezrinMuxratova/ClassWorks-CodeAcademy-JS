const BASE_URL = `https://restcountries.com/v2`;
let countriesCard = document.querySelector(".countriesCard");
let searchInput = document.querySelector(".search");
let goBack=document.querySelector(".goBack")
let body = document.querySelector("body");
let card = null;
let select=document.querySelector("#select")
let btnDark=document.querySelector(".btnDark")
async function getData(endPoint) {
  let response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawCards(response.data);
  card = response.data;
}

getData("all");

function drawCards(data) {
  countriesCard.innerHTML = "";
  data.forEach((element) => {
    countriesCard.innerHTML += `
    <div class="col-12 col-md-6 col-lg-3 g-3" >
    <a href="./details.html?name=${element.name}">
    <div class="card">
    <img src="${element.flags.svg}" alt="" />
    <h2>${element.name}</h2>
    <div class="text d-flex">
        <h5>${element.name}:</h5>
        <p>${element.population}</p>
    </div>
    <div class="text d-flex">
        
        <h5>Region:</h5>
        <p>${element.region}</p>
        </div>
        <div class="text d-flex">
        <h5>Capital:</h5>
        <p>${element.capital}</p>
       
    </div>
  </div>
    
    </a>
    </div>
    
 
    `;
  });
}

searchInput.addEventListener("input", function (e) {
  getData(`name/${e.target.value.toLocaleLowerCase()}`)
});

select.addEventListener("change", function(e){
   if(e.target.value != "all") {
    getData(`region/${e.target.value}`)
   } else {
    getData(`${e.target.value}`)
   }

})

localStorage.getItem("dark-mode") === "true" &&
  body.classList.add("dark-mode");

btnDark.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  localStorage.getItem("dark-mode") === "true"
    ? localStorage.setItem("dark-mode", false)
    : localStorage.setItem("dark-mode", true);
});
