const BASE_URL = `https://randomuser.me/api/?results=100`;

let searchInput = document.querySelector(".search");
let form = document.querySelector("form");
let userList = document.querySelector(".userListBottom");

let card = [];

async function getData() {
  const response = await axios(`${BASE_URL}`);
  drawCard(response.data)
}
getData();

function drawCard(data){
    userList.innerHTML = "";
    data.forEach((element)=>{
        userList.innerHTML += `
        
        
        <div>
        <img src="${element.picture.large}" alt="" class="image" />
        
        </div>
        <div>
        
        <h5>${element.name.first}, ${element.name.last}</h5>
        <p>${element.location.city}, ${element.location.country}</p>
        </div>
          
        
        `;
    })
}

form.addEventListener("submit", function(element){
    element.preventDefault()
    getData(searchInput.value)
})
searchInput.addEventListener("input", function(e){
    getData(e.target.value)
})

// searchInput.addEventListener("input", (e) => filterData(e.target.value));
// function filterData(b) {
//     b.preventdefault()
//     if (item.innerText.toLowerCase().includes(b.toLowerCase())) {
        
//     }
// }
