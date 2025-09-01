import { Question } from "./modules/question.js";
import { questionsData } from "./modules/questions.data.js";
import { Storage } from "./modules/storage.js";
// render questions from data
const root = document.querySelector("#quiz");
questionsData.forEach((q) => {
  const item = new Question(q.id, q.text, q.options);
  root.appendChild(item.create());
});

const submitBtn = document.getElementById("submit");

function getActiveButtons() {
  return [...document.querySelectorAll(".active")];
}
function getAllQuestions(activeBtns) {
  return activeBtns.map((btn) => {
    const qId = Number(btn.closest(".question").dataset.id);
    // نجيب كل الأزرار عشان نعرف ترتيب الاجابة
    const siblings = Array.from(btn.parentElement.children);
    const index = siblings.indexOf(btn);
    return {
      idQ: qId,
      index,
      answer: btn.textContent,
    };
  });
}

function confirmAllAnswered(activeBtns) {
  if (activeBtns.length === questionsData.length) return true;
  alert("You must answer all questions.");
  return false;
}

function handleSubmit() {
  const activeBtns = getActiveButtons();
  if (!confirmAllAnswered(activeBtns)) return;
  const userAnswers = getAllQuestions(activeBtns);
}

submitBtn.addEventListener("click", handleSubmit);

const storage = new Storage("quiz_app");

const option = [...document.querySelectorAll(".option")];
option.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const qId = e.currentTarget.closest(".question").dataset.id;
    const answer = e.currentTarget.textContent;
    const item = { qId, answer };
    storage.save(item);
  });
});
