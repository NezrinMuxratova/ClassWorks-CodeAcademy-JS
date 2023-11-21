///Task 1

let addBgColor = document.querySelector(".addBgColor");

addBgColor.addEventListener("click", function () {
  let parentElement = addBgColor.parentElement;
  parentElement.style.background = "green";
  parentElement.style.height = "200px";
  parentElement.style.width = "200px";
  parentElement.style.position = "relative";
  this.style.position = "absolute";
  this.style.bottom = "2px";
  this.style.right = "2px";
});

// Task 2
// 
let cities =document.querySelector(".cities")
let ulElem=document.createElement("ul")
let liArr = ["Ganja", "Baku", "Yevlakh", "Goranboy", "Shamkir"]
liArr.forEach((item) => {
    let liElem=document.createElement("li");
    liElem.innerText=item;
   ulElem.append(liElem);
 
})
cities.append(ulElem);

//

document.querySelectorAll("li").forEach(item=>{
    item.addEventListener("click", function(){
        this.remove();
    })
})

//Task 4

let toggle = document.querySelector(".lightBtn");
toggle.addEventListener("click", function(){
    document.body.classList.toggle("bg-green")

})

//Task 3

let header=document.querySelector(".header")
header.style.display="flex"
header.style.justifyContent="space-between"
header.style.backgroundColor="black"
header.style.color="white"
header.style.padding="20px"

let ulElement = document.querySelector(".ulElement")
ulElement.style.display="flex"
