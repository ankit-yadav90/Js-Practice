
let count = 0;
let progres = document.querySelector(".progress-bar");
let persent = document.querySelector("#percente");

let interval = setInterval(function () {
  if (count <= 99) {
    count++;
    progres.style.width = `${count}%`
    persent.textContent = `${count}%`
  } else {
    document.querySelector("h2").textContent = "Downloded";
    clearInterval(interval);
  }
}, 30);