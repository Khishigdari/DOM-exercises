const body = document.querySelector("body");
const p = document.createElement("p");
const button = document.createElement("button");

p.innerText = "Clicked 0 times";
button.innerText = "Click me";

let count = 0;
button.addEventListener("click", () => {
  count++;
  p.innerText = `Clicked ${count} times`;
});

body.appendChild(p);
body.appendChild(button);
