let filmCards = document.querySelector(".filmCards")
let form = document.querySelector("form")
let filmInput=document.querySelector(".filmInput")
let honeycomb=document.querySelector(".honeycomb")

function getData(movieName){
  honeycomb.style.display= "block"
    fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=678bc548`)
    .then((response)=> response.json())
    .then((data)=> {
      console.log(data.Response);
      if(data.Response === false) {
        honeycomb.style.display= "block"
      }
      drawCards(data.Search)
      setTimeout(()=>{
        honeycomb.style.display= "none"
      },600)
    })
    .catch((err)=>{
      console.log(err)
    })
}
getData("Harry Potter")

form.addEventListener("submit", function(element){
    element.preventDefault()
    getData(filmInput.value)
})

function drawCards (arr){
  honeycomb.style.display= "block"
    filmCards.innerHTML=""
    arr?.forEach(element =>{
        filmCards.innerHTML+=`
    
        <div class=" ">
          <div class="card" style="width: 18rem">
            <div class="card-body">
            <img src="${element.Poster}" alt="">
              <i class="fa-solid fa-heart text-danger"></i>
              <p class="card-text">${element?.Title}</p>
              <p class="card-text">${element?.Year}</p>
              <p class="card-text">${element?.imdbID}</p>
              <p class="card-text">${element?.Type}</p>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
    
    `
    })
}



filmInput.addEventListener("input", function(e){
  getData(e.target.value)
})