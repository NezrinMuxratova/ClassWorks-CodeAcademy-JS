let cards=document.querySelector(".cards")
let search=document.querySelector(".search")
const BASE_URL="http://localhost:8000/blogs"

let blogs=  null;
async function getData(){
    let response=await axios (`${BASE_URL}`)
    // console.log(response.data);
    blogs=response.data
    drawCards(response.data)
}
getData()

function drawCards (data){
    cards.innerHTML=""
    data.forEach(element => {
        cards.innerHTML += `
        
        <div class="card">
        <div class="card-body">
          <h3 class="card-title">${element.title}</h3>
          <div><a class="text">
          ${element.body}... 
        </a>
        <a href="" class="sucsecc">Read More</a></div>
          
          <p class="card-text">${element.author}</p>
          <div class="btns">

              <button class="Delete" onclick=deleteBtn(${element.id},this)>Delete</button>
              <a  href="#"  class="edit" >Edit</a>
          </div>
        </div>
      </div>
        
        
        `
    });
}

async function deleteBtn(id,btn){
    if(confirm("Do you want to delete?")){
        btn.closest("card")
        await axios.delete(`${BASE_URL}`)
    }
}


search.addEventListener("input", function(element){
    let filtered=blogs.filter((item)=> {
        item.title.toLocaleLowerCase().includes(element.target.value.toLocaleLowerCase())
    })
    drawCards(filtered)
})
