const body = document.querySelector("body");
const p = document.createElement("p");
const select = document.createElement("select");
const option = document.createElement("option");
const optionVeg = document.createElement("option");
const optionFru = document.createElement("option");
const ul = document.createElement("ul");

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

// const addList = (value) => {
//   datas.push(value);
// };

datas.map(() => {
  const li = document.createElement("li");
  ul.appendChild(li);
  ul.value = datas;

  // li.appendChild(datas)
});

// const filtered = select.value;
// console.log(filtered, "filtered");
select.addEventListener("change", () => {
  datas.filter((data) => {
    data.category === select.value;
    return datas;
  });
  console.log(datas);
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
