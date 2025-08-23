let sel = document.querySelector("select");
let output = document.querySelector("#select")
sel.addEventListener("change", function(val){
  output.textContent = `${val.target.value} Selected device`;
})