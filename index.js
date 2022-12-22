const password=document.getElementById("password");
const password_confirm=document.getElementById("confirm-password");
const errorDisplay=document.querySelector(".error-display");
const submit= document.querySelector(".submit");


password.addEventListener("mousedown",()=>{

    console.log("helloooo")

    errorDisplay.classList.add("no-error");

})


submit.addEventListener("click",()=>{

    if(!(password.value==password_confirm.value)){
        errorDisplay.classList.remove("no-error");
        password.style.border="1px solid red";
        password_confirm.style.border="1px solid red";
        // password.value="";
        // password_confirm.value="";

    }
})