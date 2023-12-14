const BASE_URL = `https://randomuser.me/api/?results=100`;

let searchInput = document.querySelector(".search");
let form = document.querySelector("form");
let userList = document.querySelector(".userListBottom");
async function getData() {
  let response = await axios(`${BASE_URL}`);
  console.log(response.data);
  drawCard(response.data.results);
}
getData("")

// function drawCard(data) {
//   userList.innerHTML = "";
//   data.forEach((element) => {
//     userList.innerHTML += `
    
//     <div class="cardOne">
//     <div>
//     <img src="${element.picture.large}" alt="" class="image" />
    
//     </div>
//     <div>
    
//     <h5>${element.name.first}, ${element.name.last}</h5>
//     <p>${element.location.city}, ${element.location.country}</p>
//     </div>
//             </div>
    
//     `;
//   });
// }

let card=[]



searchInput.addEventListener("input",function(e){
    e.preventDefault()
getData(searchInput.value)
})
userList.innerHTML.forEach(user=>{
    let liElem =document.createElement("li")
    card.push(liElem)
    liElem.innerHTML=`
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `
    userList.appendChild(liElem)
})
function drawCard(searchTerm) {
    
    card.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}