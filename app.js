import { Question } from "./modules/question.js";
import { questionsData } from "./modules/questions.data.js";

// to add active class to clicked button and remove from siblings
const questionGroups = document.querySelectorAll(".options-answer");

questionGroups.forEach((group) => {
  const options = group.querySelectorAll(".option");

  options.forEach((btn) => {
    btn.addEventListener("click", () => {
      options.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});

// render questions from data
const root = document.querySelector("#quiz");
questionsData.forEach((q) => {
  const item = new Question(q.text, q.options);
  root.appendChild(item.create());
});
