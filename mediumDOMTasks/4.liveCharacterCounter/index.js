const body = document.querySelector("body");
const p = document.createElement("p");
const input = document.createElement("input");
const pCount = document.createElement("p");

let count = 0;

p.innerText = "Live Character Counter";
pCount.innerText = "Characters: " + count;

input.addEventListener("change", () => {
  const characterCount = input.value.length;

  pCount.textContent = "Characters: " + characterCount;
});

body.appendChild(p);
body.appendChild(input);
body.appendChild(pCount);
