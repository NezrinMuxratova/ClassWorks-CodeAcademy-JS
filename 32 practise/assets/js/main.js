const nav = document.querySelector(".nav");
const menuIcon = document.querySelector("#menu");
let tbody = document.querySelector("tbody");
const BASE_URL = ` http://localhost:7000/users`;

async function getData() {
  try {
    let response = await axios(`${BASE_URL}`);
    // console.log(response.data);
    drawTable(response.data);
  } catch (error) {
    console.log(err);
  }
}

getData();

function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML += `

                        <td>${element.id}</td>
                        <td> <img class="image" src="${element.userphoto}" alt=""></td>
                        <td>${element.name}</td>
                        <td>${element.surname}</td>
                        <td>${element.email}</td>
                        <td>${element.date}</td>
                        <td>
                        <a href="form.html?id=${element.id}" class="btn btn-success">Edit</a>
                        <button class="btn btn-danger" onclick=deleteUser(${element.id},this)>Delete</button>
                        <button class="btn btn-primary" onclick=addToFav(${element.id},this)>Add Fav</button>
                        </td>
    
    `;
    tbody.append(trElem);
  });
}

async function deleteUser(id, btn) {
  if (confirm("What you want to delete")) {
    btn.closest("th");
    await axios.delete(`${BASE_URL}/${id}`);
  }
}

let fav = JSON.parse(localStorage.getItem("fav")) ?? [];

async function addToFav(id, btn) {
  btn.innerText="Added"
  let response = await axios(`${BASE_URL}/${id}`);
  console.log(response.data);
  let obj = fav.find((item) => item.id === id);
  if (!obj) {
    fav.push(response.data);
    localStorage.setItem("fav", JSON.stringify(fav));

  }else{
    alert("it's already there")
  }
}


menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");

  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});