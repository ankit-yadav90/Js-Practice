let div = document.querySelector("div");

div.addEventListener("mouseover", function(){
  div.style.backgroundColor = "green"
})

div.addEventListener("mouseout", function () {
  div.style.backgroundColor = "red"
})