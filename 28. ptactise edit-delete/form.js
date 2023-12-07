let form=document.querySelector("form")
let allInputs=document.querySelectorAll("input")
const BASE_URL="http://localhost:8000/blogs"
const id =new URLSearchParams(window.location.search).get("id")
console.log(id);


async function formData(){
let response= await axios (`${BASE_URL}/${id}`)
console.log(response.data);
allInputs[0].value=response.data.title,
allInputs[1].value=response.data.body,
allInputs[2].value=response.data.author

}

form.addEventListener("submit", function(event){
    event.preventDefault()
})