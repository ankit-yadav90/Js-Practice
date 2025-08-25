let input = document.querySelector("#fileInput");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
  input.click();
});
input.addEventListener("change", function(event){
  btn.textContent = event.target.files[0].name;
})