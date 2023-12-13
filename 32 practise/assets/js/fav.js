let cards = document.querySelector(".cards");
let fav = JSON.parse(localStorage.getItem("fav"));


function drawCard(data) {
  cards.innerHTML += "";
  data.forEach((element) => {
    let cardDiv=document.createElement("div")
    cardDiv.className="card"
    cardDiv.innerHTML = `
      
       <img src="${element.userphoto}" class="card-img-top" alt="">
       <div class="card-body">
         <h5 class="card-name">${element.name} ${element.surname}</h5>
         <p class="card-email">${element.email}</p>
         <p class="card-date">${element.date}</p>
         <a href="#" class="btn btn-danger">Delete</a>
       </div>
   
       
       `;
       cards.append(cardDiv)
  });
}
drawCard(fav)