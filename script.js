const userName = document.querySelector("#username");
const password = document.querySelector("#pass");
const loginBtn = document.querySelector("#login");
const msg = document.querySelector("#messege");
const showPass = document.querySelector("#showPass");

showPass.addEventListener("click", ()=>{
    if(showPass.innerText === "🧐"){
        showPass.innerText = "🙄";
        password.type = "text";
    } else {
        showPass.innerText = "🧐";
        password.type = "password";
    };
});

loginBtn.addEventListener("click", () =>{
    if(userName.value === "" || password.value === ""){
        msg.innerText = "Please fill all fields"
        msg.className = "error"
        userName.value = "";
        password.value = "";
    }else if(userName.value === "Anakin" && password.value === "qwerty"){
        msg.innerText = "Login successful";
        msg.className = "success";
    } else{
        msg.innerText = "Wrong username or password";
        msg.className = "error";
        userName.value = "";
        password.value = "";
    }
});
