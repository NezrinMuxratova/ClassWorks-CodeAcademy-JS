let box = document.querySelector(".box");
let electronics = document.querySelector(".electronics");
let jewelery = document.querySelector(".jewelery");
let menBtn = document.querySelector(".menBTn");
let womenBtn = document.querySelector(".womenBtn");
const BASE_URL = "https://fakestoreapi.com/products";


async function getData(categoryName) {
  const res = await axios(`${BASE_URL}/${categoryName}`);
  console.log(res.data);
  drawCards(res.data);
}

getData("");


function drawCards(arr) {
  box.innerHTML = "";

  arr.forEach((element) => {
    box.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4 p-3">

    <div class="card" style="width: 18rem;">
    <a href="./details.html?id=${element.id}">
        <img src="${element.image}" class="card-img-top " alt="">
    </a>
    <div class="card-body">
            <p class="card-text-one">${element.title}</p>
            <p class="card-text-two">${element.price}</p>
            <p class="card-text-three">${element.category}</p>
        </div>

    </div>
    </div>
            `;
  });
}

electronics.addEventListener("click", function(){
    getData("/category/electronics")
})
jewelery.addEventListener("click", function(){
    getData("/category/jewelery")
})
menBtn.addEventListener("click", function(){
    getData("/category/men's%20clothing")
})
womenBtn.addEventListener("click", function(){
    getData("/category/women's%20clothing")
})