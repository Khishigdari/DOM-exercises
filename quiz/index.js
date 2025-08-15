const body = document.querySelector("body");
const startButton = document.getElementById("startButton");

const q = [
  {
    q: "true + false",
    a: ["truefalse", "1", "NaN", "SyntaxError"],
    c: "1",
  },
];
console.log(q, "q");

startButton.addEventListener("click", () => {
  startButton.remove();

  const qDiv = document.createElement("div");
  const h3Q = document.createElement("h3");
  const btnDiv = document.createElement("div");
  const a1Btn = document.createElement("button");
  const a2Btn = document.createElement("button");
  const a3Btn = document.createElement("button");
  const a4Btn = document.createElement("button");

  qDiv.classList.add("qDiv");
  btnDiv.classList.add("btnDiv");

  h3Q.innerText = "true + false";
  a1Btn.innerText = "'truefalse'";
  a2Btn.innerText = "1";
  a3Btn.innerText = "NaN";
  a4Btn.innerText = "SyntaxError";

  body.appendChild(qDiv);
  qDiv.appendChild(h3Q);
  qDiv.appendChild(btnDiv);
  btnDiv.appendChild(a1Btn);
  btnDiv.appendChild(a2Btn);
  btnDiv.appendChild(a3Btn);
  btnDiv.appendChild(a4Btn);

  a1Btn.addEventListener("click", () => {
    qDiv.remove();
  });
});
