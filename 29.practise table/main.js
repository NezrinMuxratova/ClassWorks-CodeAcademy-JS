const loader = document.querySelector(".loader");
let tbody = document.querySelector("tbody");
let search = document.querySelector("#search");
const BASE_URL = `http://universities.hipolabs.com/search?country=Azerbaijan`;

let blogs = null;
async function getData() {
    try {
        
        loader.classList.add("show");
        let response = await axios(`${BASE_URL}`);
        loader.classList.remove("show");
        console.log(response.data);
        blogs = response.data;
        drawTable(response.data);
    } catch (error) {
        console.log(error);
    }
}
getData();

function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML += `
                        <th>${element.name}</th>
                        <th>${element.country}</th>
                        <th>${element.domains}</th>
                        <th> <a href="${element.web_pages}">${element.web_pages}</a></th>
                      
   
   `;
    tbody.append(trElem);
  });
}

search.addEventListener("input", async function (e) {
    try {
        
        loader.classList.add("show");
        let response = await axios(`${BASE_URL}&name=${e.target.value}`);
        loader.classList.remove("show");
        drawTable(response.data);
    } catch (error) {
        console.log(error);
    }
});
