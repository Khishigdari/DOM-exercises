const data = [
  {
    answers: ["var", "let", "const", "all of the above"],
    question: "Which keyword is used to declare a variable in JavaScript?",
    correctAnswer: "all of the above",
  },
  {
    answers: ["String", "Number", "Boolean", "All of the above"],
    question: "Which of the following is a JavaScript data type?",
    correctAnswer: "All of the above",
  },
  {
    answers: ["//", "/* */", "<!-- -->", "Both // and /* */"],
    question: "How do you write a comment in JavaScript?",
    correctAnswer: "Both // and /* */",
  },
  {
    answers: ["==", "=", "===", "!=="],
    question: "Which operator checks both value and type equality?",
    correctAnswer: "===",
  },
  {
    answers: ["concat()", "append()", "join()", "merge()"],
    question: "Which method joins two or more arrays in JavaScript?",
    correctAnswer: "concat()",
  },
  {
    answers: [
      "document.querySelector()",
      "document.getElementById()",
      "document.querySelectorAll()",
      "All of the above",
    ],
    question: "Which method is used to select HTML elements in JavaScript?",
    correctAnswer: "All of the above",
  },
  {
    answers: ["push()", "pop()", "shift()", "unshift()"],
    question: "Which method removes the last element from an array?",
    correctAnswer: "pop()",
  },
  {
    answers: [
      "function myFunc() {}",
      "def myFunc() {}",
      "func myFunc() {}",
      "function:myFunc() {}",
    ],
    question: "How do you declare a function in JavaScript?",
    correctAnswer: "function myFunc() {}",
  },
  {
    answers: ["NaN", "undefined", "null", "None"],
    question: "What is the value of an uninitialized variable in JavaScript?",
    correctAnswer: "undefined",
  },
  {
    answers: ["for", "while", "foreach", "loop"],
    question:
      "Which keyword creates a loop that runs a specified number of times?",
    correctAnswer: "for",
  },
  {
    answers: ["map()", "filter()", "reduce()", "All of the above"],
    question:
      "Which method is used to iterate and transform elements of an array?",
    correctAnswer: "map()",
  },
  {
    answers: [
      "== compares only value, === compares value and type",
      "== compares type only",
      "They are the same",
      "=== compares only value",
    ],
    question: "What is the difference between == and === in JavaScript?",
    correctAnswer: "== compares only value, === compares value and type",
  },
  {
    answers: ["Math.random()", "Math.floor()", "Math.round()", "Math.max()"],
    question: "Which method generates a random number between 0 and 1?",
    correctAnswer: "Math.random()",
  },
  {
    answers: ["false", "true", "null", "undefined"],
    question: "What is the default Boolean value of an uninitialized variable?",
    correctAnswer: "undefined",
  },
  {
    answers: ["break", "exit", "stop", "end"],
    question: "Which statement is used to stop a loop prematurely?",
    correctAnswer: "break",
  },
  {
    answers: [
      "It adds a new element",
      "It changes an element",
      "It removes an element",
      "It checks if an element exists",
    ],
    question: "What does the push() method do in JavaScript?",
    correctAnswer: "It adds a new element",
  },
  {
    answers: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toText()",
    ],
    question: "Which method converts a JSON string into a JavaScript object?",
    correctAnswer: "JSON.parse()",
  },
  {
    answers: ["typeof", "instanceof", "checktype", "type()"],
    question: "Which operator returns the type of a variable?",
    correctAnswer: "typeof",
  },
  {
    answers: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    question: "Which method calls a function after a specified time delay?",
    correctAnswer: "setTimeout()",
  },
  {
    answers: ["true && false", "true || false", "!true", "false && true"],
    question: "Which of the following returns true?",
    correctAnswer: "true || false",
  },
];

const body = document.querySelector("body");
const startBtn = document.querySelector("button");
let currentIndex = 0;
let point = 0;

const quizStart = () => {
  startBtn.remove();
  const question = document.createElement("h2");
  const currentQuestion = document.createElement("p");
  body.appendChild(question);
  currentQuestion.innerText = `${currentIndex}/${data.length}`;
  body.appendChild(currentQuestion);

  new Array(4).fill(0).forEach((el, i) => {
    const btn = document.createElement("button");
    body.appendChild(btn);
    btn.addEventListener("click", () => {
      if (data[currentIndex].correctAnswer === data[currentIndex].answers[i]) {
        point++;
        // console.log(point);
      }
      currentIndex++;
      question.innerText = data[currentIndex].question;
      const answerBtns = document.querySelectorAll("button");
      answerBtns.forEach(
        (btn, index) => (btn.innerText = data[currentIndex].answers[index])
      );
      currentQuestion.innerText = `${currentIndex}/${data.length}`;
    });
  });

  const drawQuestion = () => {
    const answerBtns = document.querySelectorAll("button");
    answerBtns.forEach(
      (btn, index) => (btn.innerText = data[currentIndex].answers[index])
    );
    question.innerText = data[currentIndex].question;
  };

  drawQuestion();
};

startBtn.addEventListener("click", quizStart);
