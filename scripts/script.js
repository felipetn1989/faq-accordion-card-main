let arrows = document.querySelectorAll(".question__arrow");

let answers = document.querySelectorAll(".question__answer");

let questions = document.querySelectorAll(".faq__question");

/* The function toggleAnswer(i) checks if the answers[i] element is hidden or not. If it's hidden, it will show the element and do the appropriate transformations on the correspondent line  */

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

/* This next part of the code will check for each instance of the questions[i] element and trigger a function when I click on any of them. This function will call the toggleAnswer function above*/

for (let i = 0; i < arrows.length; i++) {
  questions[i].addEventListener("click", function () {
    toggleAnswer(i);
  });
}
