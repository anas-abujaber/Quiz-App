import { Question } from "./modules/question.js";
import { questionsData } from "./modules/questions.data.js";


// render questions from data
const root = document.querySelector("#quiz");
questionsData.forEach((q) => {
  const item = new Question(q.text, q.options);
  root.appendChild(item.create());
});
