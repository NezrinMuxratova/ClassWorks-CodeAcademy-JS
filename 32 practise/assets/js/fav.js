let cards = document.querySelector(".cards");
let fav = JSON.parse(localStorage.getItem("fav"));


function drawCard(data) {
  cards.innerHTML += "";
  data.forEach((element) => {
    let cardDiv=document.createElement("div")
    cardDiv.className="card"
    cardDiv.innerHTML = `
      
       <img src="${element.userphoto}"alt="">
       <div class="card-body">
         <h5 class="card-name">${element.name} ${element.surname}</h5>
         <p class="card-email">${element.email}</p>
         <p class="card-date">${element.date}</p>
         <button class="btn btn-primary" onclick=deleteUser(${element.id},this)>Remove Fav</button>
       </div>
   
       
       `;
       cards.append(cardDiv)
  });
}
drawCard(fav)


function deleteUser(id, btn) {

  if (confirm("What you want to delete")) {
    let favorite =fav.filter((item)=> item.id != id)
    btn.closest(".card").remove();
    localStorage.setItem("fav", JSON.stringify(favorite))
  }
}
