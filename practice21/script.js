function SetDarkOrLight(){
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
}else {
  document.body.classList.add("light");
    document.body.classList.remove("dark");
    
}
}
SetDarkOrLight();

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
  if(document.body.classList.contains("dark")){
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }else{
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
})

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(){
  SetDarkOrLight();
})