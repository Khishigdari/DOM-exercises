const body = document.querySelector("body");
const p = document.createElement("p");
const input = document.createElement("input");
const button = document.createElement("button");
const ul = document.createElement("ul");

p.innerText = "Add item from input";
button.innerText = "Add";

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = input.value;
  ul.appendChild(li);
  input.value = "";
});

body.appendChild(p);
body.appendChild(input);
body.appendChild(button);
body.appendChild(ul);
