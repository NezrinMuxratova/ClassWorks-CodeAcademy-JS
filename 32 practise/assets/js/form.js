let form = document.querySelector("form");
let allInput = document.querySelectorAll("input");
let goBtn = document.querySelector(".btn");
const BASE_URL = ` http://localhost:7000/users`;
const id = new URLSearchParams(window.location.search).get("id");

console.log(id);

async function formData() {
  let responsive = await axios(`${BASE_URL}/${id}`);
  console.log(responsive.data);
  (allInput[0].value = responsive.data.name),
    (allInput[1].value = responsive.data.surname),
    (allInput[2].value = responsive.data.email),
    (allInput[3].value = responsive.data.userphoto);
}
if (id) {
  formData();
}

console.log(form);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let date = new Date();
  let newCard = {
    name: allInput[0].value,
    surname: allInput[1].value,
    email: allInput[2].value,
    userphoto:`./assets/img/${allInput[3].value.split("\\")[2]}`,
    date: date.toLocaleString(),
  };

  console.log(newCard);
  if (!id) {
    if (
      allInput[0].value != "" &&
      allInput[1].value != "" &&
      allInput[2].value != ""
    ) {
      axios.post(`${BASE_URL}`, newCard);
    } else {
      window.alert("Please fill fields");
    }
  } else {
    axios.patch(`${BASE_URL}/${id}`, newCard);
  }
  console.log(allInput);
  window.location = "./index.html";
});

goBtn.addEventListener("click", function (e) {
  window.history.back();
});
