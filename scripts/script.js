let arrows = document.querySelectorAll(".question__arrow");

let answers = document.querySelectorAll(".question__answer");

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", function () {
    answers[i].style.display = "block";
    arrows[i].style.transform = "rotate(180deg)";
    arrows[i].removeEventListener;
    arrows[i].addEventListener("click", function () {
      answers[i].style.display = "none";
      arrows[i].style.transform = "rotate(0deg)";
    });
  });
}
