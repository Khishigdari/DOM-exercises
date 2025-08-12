const body = document.querySelector("body");
const p = document.createElement("p");
const button = document.createElement("button");

button.innerText = "Show numbers > 5";

let num = [2, 3, 7, 5, 1, 15, 75, 4, 105, 42];

p.innerText = num;

// button.addEventListener("click", () => {
//   data.filter((data) => {
//     return data.value > 5;
//   });
//   p.innerText = parseInt(data.value);
//   console.log(data);
// });

button.addEventListener("click", () => {
  const result = num.filter(greaterThan5);
  function greaterThan5(num) {
    return num > 5;
  }
  p.innerText = result;
  console.log(result);
});

body.appendChild(p);
body.appendChild(button);
