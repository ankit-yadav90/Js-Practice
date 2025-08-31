let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function(items){
  items.preventDefault();

  document.querySelector("#emailError").textContent = ""
  document.querySelector("#passwordError").textContent = ""

  let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans = emailregex.test(email.value);
  let passwordans = passwordregex.test(password.value)

    let isvalid = true;
  if(!emailans){
    document.querySelector("#emailError").textContent = "Email is incorect";
    document.querySelector("#emailError").style.display = "initial";
    isvalid = false;
  }

  if(!passwordans){
    document.querySelector("#passwordError").textContent = "Password is incorect";
    document.querySelector("#passwordError").style.display = "initial";
    isvalid = false;
  }

   if(isvalid){
    document.querySelector("#result").textContent = "Every thing is corect"
   }

})