"use strict";

const Initial = document.querySelectorAll(".Initial");
const Quizz = document.querySelector(".Quizz");
const Questionno = document.querySelector(".Questionno");
const SUBMIT = document.querySelector(".submit");

let SCORE = 0;

console.log(Initial);
let i = 0;
console.log(Questionno);

class Questions {
  Question;
  Correct_answer = " ";
  option1 = "";
  option2 = "";
  option3 = "";
  option4 = "";
  Given_answer = " ";
  Selected = "Select Your Answer";
  Toughness = "";

  getQuestion() {
    return this.Question;
  }

  constructor(
    Question,
    Correct_answer,
    option1,
    option2,
    option3,
    option4,
    Given_answer,
    Toughness
  ) {
    this.Question = Question;
    this.Correct_answer = Correct_answer;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.Given_answer = Given_answer;
    this.Toughness = Toughness;
  }
  setQuestion(Question) {
    this.Question = Question;
  }
}
let q1 = new Questions(
  " Who Invented Computer ?",
  "Charles Babbage",
  "Albert Einstein",
  "Johanas Gutten Berg",
  "Charles Babbage",
  "C.V.Raman",
  "000",
  "Easy"
);

let q2 = new Questions(
  " Who Founded Tesla ?",
  "Elon Musk",
  "Ratan TATA",
  "Shellby",
  "Elon Musk",
  "Henry Ford",
  "000",
  "Intermediate"
);

let q3 = new Questions(
  " When LINUX was created?",
  "1991",
  "1900",
  "1991",
  "1969",
  "1980",
  "000",
  "Hard"
);

let q4 = new Questions(
  " When UNIX was created?",
  "1969",
  "1900",
  "1991",
  "1969",
  "1980",
  "000",
  "Easy"
);

let q5 = new Questions(
  "Father of UNIX?",
  "Dennis Richie",
  "Dennis Richie",
  "Allen Turing",
  "Charles Babbage",
  "Guido Van Rossum",
  "000",
  "Intermediate"
);

let q6 = new Questions(
  " Who wrote the first computer program?",
  "Ada Lovelace",
  "Tim Berners-lee",
  "Linus Torvaldes",
  "Bjarne Strousetroup",
  "Ada Lovelace",
  "000",
  "Hard"
);

let q7 = new Questions(
  " When React Js Launched ?",
  "2013",
  "2013",
  "2003",
  "2009",
  "2010",
  "000",
  "Easy"
);

let q8 = new Questions(
  "What is the oldest programming language still in use",
  "Fortran",
  "C",
  "Java",
  "C#",
  "Fortran",
  "000",
  "Intermediate"
);

let q9 = new Questions(
  "9 ?",
  "Charles Babbage",
  "A",
  "B",
  "Charles Babbage",
  "D",
  "000",
  "Hard"
);
let q10 = new Questions(
  " 10 ?",
  "Charles Babbage",
  "A",
  "B",
  "Charles Babbage",
  "D",
  "000",
  "Easy"
);
// alert(q1.Question);
let chk = 1;

let Arr = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
let QArray = [q1, q2];
// QArray[0].
QArray.pop();
QArray.pop();
document.querySelector("#Easy").addEventListener("click", function () {
  document.getElementById("reset").click();
  Question_Selection("Easy");
  i = 0;
  chk = 0;
});

document.querySelector("#Intermediate").addEventListener("click", function () {
  document.getElementById("reset").click();
  Question_Selection("Intermediate");
  i = 0;
  chk = 0;
});
document.querySelector("#Hard").addEventListener("click", function () {
  document.getElementById("reset").click();
  Question_Selection("Hard");
  i = 0;
  chk = 0;
});
// Question_Selection("Hard");

function Question_Selection(type) {
  QArray = [];
  for (let j = 0; j < 10; j++) {
    if (Arr[j].Toughness == type) {
      QArray.push(Arr[j]);
      // alert(Arr[j].Given_answer);
    }
  }
}

// QArray[0].
if (chk == 1) {
  QArray = Arr;
}

Basics(i, QArray);
function Basics(i, QArray) {
  // location.href="Quizz.html"
  QuestionDisplay(i, QArray);
  OptionDisplay(i, QArray);
}
function QuestionDisplay(i, QArray) {
  let Qw = new Questions();
  Qw = QArray[i];
  //  Qw.getQuestion;
  Qw.Question;
  let str = Qw.Question;
  document.querySelector(".Questionno").textContent = i + 1;

  // console.log("Varuthu varuthu")
  let t = document.querySelector("#Question").textContent;

  document.querySelector("#Question").textContent = `${str}`;
  //  Questionhtml.textContent =`${str}`;
}
function OptionDisplay(i, arr) {
  document.querySelector("#option1").textContent = `${arr[i].option1}`;
  document.querySelector("#option2").textContent = `${arr[i].option2}`;
  document.querySelector("#option3").textContent = `${arr[i].option3}`;
  document.querySelector("#option4").textContent = `${arr[i].option4}`;
}

document.querySelector(".next").addEventListener("click", function () {
  if (i >= QArray.length) {
    //break;
  } else {
    i++;
    if (i == QArray.length - 1) {
      ShowSubmit();
    }

    QuestionDisplay(i, QArray);
    OptionDisplay(i, QArray);
    UpdateProgressBar(i, QArray);
    document.querySelector(".selectedtext").textContent = QArray[i].Selected;
  }
});
document.querySelector(".previous").addEventListener("click", function () {
  if (i <= 0) {
    //break;
  } else {
    i--;
    HideSubmit();

    QuestionDisplay(i, QArray);
    OptionDisplay(i, QArray);

    UpdateProgressBar(i, QArray);
    document.querySelector(".selectedtext").textContent = QArray[i].Selected;
  }
});

function HideSubmit() {
  SUBMIT.classList.add("Hidden");
}
function ShowSubmit() {
  SUBMIT.classList.remove("Hidden");
}
document.querySelector("#option1").addEventListener("click", function () {
  QArray[i].Given_answer = `${document.querySelector("#option1").textContent}`;
  QArray[i].Selected = `${document.querySelector("#option1").textContent}`;
  //   alert(QArray[i].Selected);
  document.querySelector(".selectedtext").textContent = QArray[i].Selected;
});
document.querySelector(".reset").addEventListener("click", function () {
  document.getElementById("Scorebox").style.display = "none";
  document.getElementById("Filter").style.display = "block";
  document.getElementById("resetfilter").style.display = "block";

  SUBMIT.classList.add("Hidden");
  SCORE = 0;
  i = 0;
  QArray = Arr;
  UpdateSelected(QArray);
  QuestionDisplay(i, QArray);
  UpdateProgressBar(i, QArray);
  OptionDisplay(i, QArray);
  let d = QArray.length;
});

function UpdateSelected(QArray) {
  let mm = new Questions();
  for (let z = 0; z < 10; z++) {
    mm = QArray[z];
    mm.Selected = "SELECTED YOUR ANSWER";
  }
}

document.querySelector("#option2").addEventListener("click", function () {
  QArray[i].Given_answer = `${document.querySelector("#option2").textContent}`;
  QArray[i].Selected = `${document.querySelector("#option2").textContent}`;
  // alert(QArray[i].Selected);
  document.querySelector(".selectedtext").textContent = QArray[i].Selected;
});

document.querySelector("#option3").addEventListener("click", function () {
  QArray[i].Given_answer = `${document.querySelector("#option3").textContent}`;
  QArray[i].Selected = `${document.querySelector("#option3").textContent}`;
  // alert(QArray[i].Selected);
  document.querySelector(".selectedtext").textContent = QArray[i].Selected;
});

document.querySelector("#option4").addEventListener("click", function () {
  QArray[i].Given_answer = `${document.querySelector("#option4").textContent}`;
  QArray[i].Selected = `${document.querySelector("#option4").textContent}`;
  // alert(QArray[i].Selected);
  document.querySelector(".selectedtext").textContent = QArray[i].Selected;
});

document.querySelector(".submit").addEventListener("click", function () {
  let qw = new Questions();
  for (let j = 0; j < QArray.length; j++) {
    qw = QArray[j];

    if (qw.Correct_answer == qw.Given_answer) {
      SCORE++;
    }
  }
  document.getElementById("Filter").style.display = "none";
  document.getElementById("resetfilter").style.display = "none";
  document.querySelector(".score").textContent = `${SCORE}`;
  document.getElementById("Scorebox").style.display = "block";

  // alert(SCORE);
  feedBack();
});

function UpdateProgressBar(i, QArray) {
  let Percentage = Math.round(((i + 1) / QArray.length) * 100);
  // alert("HI");
  document.getElementById("progressbar").style.width = `${Percentage}%`;
  document.getElementById("progressbar").textContent = `${Percentage}%`;
}

function feedBack() {
  // alert("Hi");
  if ((SCORE / QArray.length) * 100 > 80) {
    document.getElementById("feedBack").textContent = "Excellent!";
  } else if (
    (SCORE / QArray.length) * 100 > 50 &&
    (SCORE / QArray.length) * 100 < 80
  ) {
    document.getElementById("feedBack").textContent = "Good job!";
  } else {
    document.getElementById("feedBack").textContent = "Keep Practicing";
  }
}
document.querySelector("#resetfilter").addEventListener("click", function () {
  document.getElementById("reset").click();
});

let timerInterval;
let timeRemaining = 15 * 60;

const timerDisplay = document.getElementById("timer");

function updateTimer() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    timerDisplay.textContent = "Time's up!";
    document.getElementById("submit").click();
  } else {
    timeRemaining--;
  }
}

function TimerStart() {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

document.querySelector(".reset").addEventListener("click", function () {
  clearInterval(timerInterval);
  timeRemaining = 20 * 60;
  updateTimer();
  TimerStart();
});

// Initial display
updateTimer();
TimerStart();
