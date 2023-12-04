let products = document.querySelector(".products-div");
let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
const BASE_URL = `https://api.escuelajs.co/api/v1`;

fetch(`${BASE_URL}/products`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    drawCards(data);
  })
  .catch((err) => {
    console.log(err);
  });

function drawCards(arr) {
  products.innerHTML = "";
  // console.log(products);
  arr.forEach((element) => {
    products.innerHTML += `
        <div class="product">
      <div class="product-image">
          <img src="${element.images}" style="width: 100%" alt="" />
          </div>
          <div class="product-heading">
          <p class="title">"${element.title}"</p>
          <p class="description">"${element.description}"</p>
          <span>"${element.price}"</span>
          <div><button class="deleteBtn onclick=deleteCustomer("${element.id},this)>Delete</button></div>
          </div>
          </div> 
          </div>
          `;
  });
}

function deleteCustomer(productId, btn) {
  fetch(`${BASE_URL}/products/${productId}`, {
    method: "DELETE",
  });

  btn.closest(".product").remove();
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let obj = {
    title: allInputs[0].value,
    price: allInputs[1].value,
    description: allInputs[2].value,
    images: allInputs[3].value,
  
  };
  // console.log(obj);

  fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(() => {
      fetch(`${BASE_URL}/products`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          drawCards(data);
        })
        .catch((err) => {
          console.log(err);
        });
      });
      allInputs.forEach((item) => (item.value = ""));
  })

