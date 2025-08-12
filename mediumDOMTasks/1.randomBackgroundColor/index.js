const body = document.querySelector("body");
const div = document.createElement("div");
const containerDiv = document.createElement("div");
const p = document.createElement("p");
const button = document.createElement("button");

button.innerText = "Change Color";
p.innerText = "Random Background Color";
div.style.width = "100vw";
div.style.height = "100vh";

const namedColors = ["red", "green", "blue", "yellow", "purple", "orange"];

let count = 0;

button.addEventListener("click", () => {
  div.style.backgroundColor = namedColors[count];
  if (count > namedColors.length - 1) count = 0;
  count++;
});

body.appendChild(div);
div.appendChild(containerDiv);
containerDiv.appendChild(p);
containerDiv.appendChild(button);
