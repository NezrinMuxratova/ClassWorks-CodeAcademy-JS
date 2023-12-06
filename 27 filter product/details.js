let id = new URLSearchParams(window.location.search).get("id");
let details = document.querySelector(".details");
const BASE_URL = "https://fakestoreapi.com/products";
let detailsBtn = document.querySelector(".detailsBtn");
console.log(id);

async function getData() {
  const res = await axios(`${BASE_URL}/${id}`);
  console.log(res.data);
  drawCards(res.data);
}

getData("");

function drawCards(arr) {
  details.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4 p-3">
  
      <div class="card" style="width: 18rem;">
          <img src="${arr.image}" class="card-img-top " alt="">
          <div class="card-body">   
              <p class="card-text-one">${arr.title}</p>
              <p class="card-text-two">${arr.price}</p>
              <p class="card-text-three">${arr.category}</p>
          </div>
  
      </div>
      </div>
              `;
}

detailsBtn.addEventListener("click", function () {
  window.history.back();
});
