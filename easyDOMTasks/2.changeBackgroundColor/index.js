const body = document.querySelector("body");
const div = document.createElement("div");
const button = document.createElement("button");

button.innerText = "Change Color";
div.style.width = "300px";
div.style.height = "100px";
div.style.backgroundColor = "brown";

// const namedColors = ["red", "green", "blue", "yellow", "purple", "orange"];

let count = 0;

button.addEventListener("click", () => {
  // div.style.backgroundColor = namedColors[count];
  // if (count > namedColors.length - 1) count = 0;
  // count++;
  div.style.backgroundColor = "blue";
});

body.appendChild(div);
body.appendChild(button);
