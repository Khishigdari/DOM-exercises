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

option.addEventListener("change", () => {
  let filtered = datas.filter((data) => {
    return data.name;
  });
  return filtered;

  //   const filtered = data.filter((arr) => {
  // if()
  //   });
});
console.log(datas.name);

body.appendChild(p);
body.appendChild(select);
select.appendChild(option);
select.appendChild(optionVeg);
select.appendChild(optionFru);
