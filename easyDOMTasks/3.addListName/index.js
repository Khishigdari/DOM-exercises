const body = document.querySelector("body");
const button = document.createElement("button");
const ul = document.createElement("ul");
let li = document.createElement("li");

button.innerText = "Add 'Banana'";
li.innerText = "Apple";

button.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = "Banana";
  ul.appendChild(li);
});

body.appendChild(button);
body.appendChild(ul);
ul.appendChild(li);
