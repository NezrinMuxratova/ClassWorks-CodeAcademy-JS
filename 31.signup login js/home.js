 const logOutBtn=document.querySelector(".log-out")



window.addEventListener("load", function (e) {
    e.preventDefault()
    localStorage.getItem("user") ? null : this.window.location ="login.html"
   
})

logOutBtn.addEventListener("click", function(){
    confirm("Are you sure log out?")
    localStorage.clear()
    window.location.reload()
})