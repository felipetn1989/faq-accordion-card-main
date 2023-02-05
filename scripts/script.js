let arrows = document.querySelectorAll(".question__arrow");

let answers = document.querySelectorAll(".question__answer");

let questions = document.querySelectorAll(".faq__question");

/* The function toggleAnswer(i) toggles the appropriate CSS classes for the elements that change when a menu is open  */

function toggleAnswer(i) {
  for (let j = 0; j < answers.length; j++) {
    if (j != i) {
      answers[j].classList.remove("display");
      arrows[j].classList.remove("rotation");
      questions[j].classList.remove("fWeight");
    }
  }
  answers[i].classList.toggle("display");
  arrows[i].classList.toggle("rotation");
  questions[i].classList.toggle("fWeight");
}

/* This next part of the code will check for each instance of the questions[i] element and trigger a function when I click on any of them. This function will call the toggleAnswer function above */

questions.forEach((question, index) =>
  question.addEventListener("click", () => toggleAnswer(index))
);
