const BASE_URL = `https://api.dictionaryapi.dev/api/v2/entries/en`;
let searchInput = document.querySelector(".searchInput");
let definition = document.querySelector(".text");
let form = document.querySelector("form");


async function getData(word) {
try {
  let res=await fetch(BASE_URL)
  let 
} catch (error) {
  
}
}


function drawDef(data) {
  definition.innerHTML = "";
  data.forEach((element) => {
    definition.innerHTML += `
    <div class="audio">
    <p>${element.word} ${element.phonetics[0]?.text}</p>
<i onclick=playAudio(this) class="fa-solid fa-volume-high"><audio src="${element.phonetics[0]?.audio}"></audio></i>
    </div>
    <div class="definition">
       <p>Definition( ${element.meanings[0]?.partOfSpeech})</p>
       <p class="defText">${element.meanings[0]?.definitions[0].definition} </p>
    </div>
    
    `;
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getData(searchInput.value);
});

// searchInput.addEventListener("input", function(e))

function playAudio(icon) {
    // console.log(icon.querySelector("audio"));
  icon.querySelector("audio").play();
}

