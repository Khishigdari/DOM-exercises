const body = document.querySelector("body");
const p = document.createElement("p");
const button = document.createElement("button");

p.innerText = "You can hide and show me";
button.innerText = "Hide/Show";

let change = false;

button.addEventListener("click", () => {
  change = !change;
  if (change) {
    p.innerText = "";
  } else {
    p.innerText = "You can hide and show me";
  }
});

body.appendChild(p);
body.appendChild(button);
