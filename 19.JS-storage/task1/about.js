let storedData=localStorage.getItem("personObj")
let userData= storedData ? JSON.parse(storedData) : []

function renderTable(userData){
        let table =document.querySelector("table")
    let tbody =document.querySelector("tbody")
    userData.forEach((data) => {
        let tr =document.createElement("tr")
        tr.innerHTML=`
        <td>${data.id}</td>
        <td>${data.fistName}</td>
        <td>${data.lastName}</td>
        <td>${data.address}</td>
        `;
        tbody.append(tr)
    })
    table.appendChild(tbody)
}

renderTable(userData)

