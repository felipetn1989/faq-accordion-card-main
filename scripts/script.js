let arrows = document.querySelectorAll(".question__arrow");

let answers = document.querySelectorAll(".question__answer");

let questions = document.querySelectorAll(".faq__question");

function toggleAnswer(i) {
  if (answers[i].style.display == "block") {
    answers[i].style.display = "none";
    arrows[i].style.transform = "rotate(0deg)";
    questions[i].style.fontWeight = "normal";
  } else {
    answers[i].style.display = "block";
    arrows[i].style.transform = "rotate(180deg)";
    questions[i].style.fontWeight = "bold";
  }
}

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", function () {
    toggleAnswer(i);
  });
}
