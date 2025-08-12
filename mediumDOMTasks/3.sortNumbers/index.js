const body = document.querySelector("body");
const p = document.createElement("p");
const pNum = document.createElement("p");
const button = document.createElement("button");

let num = [8, 3, 7, 1, 5];

p.innerText = "Sort Numbers";
pNum.innerText = "Numbers: " + num;
button.innerText = "Sort Ascending";

let change = false;

button.addEventListener("click", () => {
  change = !change;
  const pSort = document.createElement("p");
  button.innerText = change ? "Sort Ascending" : "Sort Descending";

  if (change) {
    num.sort((num2, num1) => {
      return num1 - num2;
    });
    pSort.innerText = "Descending: " + num;
    console.log(pSort);
  } else {
    num.sort((num2, num1) => {
      return num2 - num1;
    });
    pSort.innerText = "Ascending: " + num;
    console.log(pSort);
  }
  body.appendChild(pSort);
});

body.appendChild(p);
body.appendChild(pNum);
body.appendChild(button);
