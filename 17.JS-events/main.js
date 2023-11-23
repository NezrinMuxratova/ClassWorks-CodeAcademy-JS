let email=document.getElementById("emailInput")
let password=document.getElementById("passwordInput")
let form=document.getElementById("userForm")
let checkBox=document.getElementById("checkBox")

form.addEventListener("submit", function(event){
console.log(checkBox);
event.preventDefault()
if (email.value !== "" && password.value !== "")  {
    let user{
        email : email.value,
        password : password.value,
        
    }
}
})