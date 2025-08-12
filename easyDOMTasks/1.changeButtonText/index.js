const body = document.querySelector("body");
const button = document.createElement("button");
const p = document.createElement("p");

button.innerText = "Change to Hi there!";
p.innerText = "Hello World";

let change = false;

button.addEventListener("click", () => {
  change = !change;

  button.innerText = change ? "Change to Hello World" : "Change to Hi there!";
  if (change) {
    p.innerText = "Hi there!";
  } else {
    p.innerText = "Hello World";
  }
});

body.appendChild(button);
body.appendChild(p);
