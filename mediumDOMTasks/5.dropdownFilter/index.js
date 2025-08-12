const body = document.querySelector("body");
const p = document.createElement("p");
const select = document.createElement("select");
const option = document.createElement("option");
const optionVeg = document.createElement("option");
const optionFru = document.createElement("option");

p.innerText = "Dropdown Filter";
option.innerText = "All";
optionVeg.innerText = "Vegetables";
optionFru.innerText = "Fruits";

let datas = [
  { name: "Banana", category: "fruit" },
  { name: "Apple", category: "fruit" },
  { name: "Broccoli", category: "vegetable" },
  { name: "Carrot", category: "vegetable" },
];

// const filtered = select.value;
// console.log(filtered, "filtered");
select.addEventListener("click", () => {
  if (datas.category === select.value) {
    return datas.name;
  }
  console.log("bye");
});

// function myFunction() {
//   let filtered = select.value;
//   filtered = p;
//   optionVeg.addEventListener("click", () => {
//     datas.filter((data) => {
//       return data === filtered;
//     });
//   });
// }

// option.addEventListener("change", () => {
//   let filtered = datas.filter((data) => {
//     return data.name;
//   });
//   return filtered;
// });
// console.log(datas.name);

body.appendChild(p);
body.appendChild(select);
select.appendChild(option);
select.appendChild(optionVeg);
select.appendChild(optionFru);
