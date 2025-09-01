import { Question } from "./modules/question.js";
import { questionsData } from "./modules/questions.data.js";
import { Storage } from "./modules/storage.js";

const root = document.querySelector("#quiz");
const submitBtn = document.getElementById("submit");
const optionBtns = document.querySelectorAll(".option");
const storage = new Storage("quiz_app");

submitBtn.addEventListener("click", handleSubmit);

// Render Questions
questionsData.forEach((q) => {
  const item = new Question(q.id, q.text, q.options);
  root.appendChild(item.create());
});

// Functions
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

// Storage Event
optionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const qId = e.currentTarget.closest(".question").dataset.id;
    const answer = e.currentTarget.textContent;
    const item = { qId, answer };
    storage.save(item);
  });
});

// Event (reload page)
document.addEventListener("DOMContentLoaded", () => {
  console.log(storage.getAll()); 
});
