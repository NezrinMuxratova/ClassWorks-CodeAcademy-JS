// const BASE_URL = `https://randomuser.me/api/?results=100`;

let searchInput = document.querySelector(".search");
let form = document.querySelector("form");
let userList = document.querySelector(".userListBottom");

let card = [];

async function getData() {
    const res = await fetch(`https://randomuser.me/api/?results=100`);
    const { result } = await res.json();
    
    result.innerHTML =``;
    
    result.forEach((element) => {
        let liElem = document.createElement("li");
        card.push(liElem);
        liElem.innerHTML += `
        
        
        <div>
        <img src="${element.picture.large}" alt="" class="image" />
        
        </div>
        <div>
        
        <h5>${element.name.first}, ${element.name.last}</h5>
        <p>${element.location.city}, ${element.location.country}</p>
        </div>
        
        
        `;
        result.append(liElem);
    });
}
getData();

searchInput.addEventListener("input", (e) => {
    // e.preventDefault()
    filterData(e.target.value)});
function filterData(b) {
  card.filter((item) => {
   return  item.innerText.toLowerCase().includes(b.toLowerCase())
 
  });
  
}
console.log(filterData());