

let tbody = document.querySelector("tbody");
function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML += `
        <td>${element.id}</td>
        <td>${element.first_name}  ${element.last_name}</td>
        <td>${element.email}</td>
        <td>${element.gender}</td>
       
        `;
    tbody.append(trElem);
  });
}
drawTable(data);

let ascendingBtn = document.querySelector(".ascendingBtn");
let descendingBtn = document.querySelector(".descendingBtn");
let nameBtn = document.querySelector(".nameBtn");
let search = document.querySelector(".search");

ascendingBtn.addEventListener("click", function () {
  let sorted = data.sort((a, b) => {
    return a.id - b.id;
  });
  drawTable(sorted);
});
descendingBtn.addEventListener("click", function () {
  let sorted = data.sort((a, b) => {
    return b.id - a.id;
  });
  drawTable(sorted);
});

nameBtn.addEventListener("click", function () {
  let sorted = data.sort((a, b) => {
    return a.first_name.localeCompare(b.first_name);
  });
  drawTable(sorted);
});
search.addEventListener("keyup", function (event) {
  let filteredData = data.filter((element) => {
    return element.first_name
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase());
  });
  drawTable(filteredData);
});
