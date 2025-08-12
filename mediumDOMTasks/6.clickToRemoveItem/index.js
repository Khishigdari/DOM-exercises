const { createElement } = require("react");

const body = document.querySelector("body");
const p = document.createElement("p");
const input = document.createElement("input");
const button = document.createElement("button");
const ul = document.createElement("ul");

p.innerText = "Click to Remove Item";
button.innerText = "Add";

let data = [];

const addList = (value) => {
  data.push(value);
};

const createElement = (value) => {
  const li = document.createElement("li");
  ul.appendChild(li);
  button.addEventListener("click", () => {
    li.innerText = input.value;
    input.value = "";
  });
};

function myFunction() {
  li.addEventListener("click", () => {
    input.value.remove();
  });
}

body.appendChild(p);
body.appendChild(input);
body.appendChild(button);
body.appendChild(ul);
