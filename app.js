import { Question } from "./modules/question.js";
import { questionsData } from "./data/questions.data.js";
import { Storage } from "./modules/storage.js";

const root = document.querySelector("#quiz");
const submitBtn = document.getElementById("submit");
const restartBtn = document.getElementById("restart");
const storage = new Storage("quiz_app");

submitBtn.addEventListener("click", handleSubmit);
restartBtn.addEventListener("click", handleRestart);

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

function calculateScore(answers) {
  let score = 0;
  answers.forEach((ans) => {
    const question = questionsData.find((q) => q.id === ans.idQ);
    if (!question) return;

    if (question.type === "mcq" && question.answer === ans.index) {
      score += 1;
    } else if (question.type === "tf") {
      const correctText = question.correct ? "True" : "False";
      if (correctText === ans.answer) {
        score += 1;
      }
    }
  });
  return score;
}

function alertScore(score, total) {
  if (score === total) {
    alert(`Perfect score! Your score is ${score} out of ${total}`);
    return;
  } else if (score / total >= 0.7) {
    alert(`Great job! Your score is ${score} out of ${total}`);
    return;
  } else {
    alert(`Your score is ${score} out of ${total}. Keep practicing!`);
    return;
  }
}
function resetQuiz() {
  if (!confirm("Are you sure you want to reset the quiz?")) return;
  localStorage.removeItem("quiz_app");
  document.querySelectorAll(".active").forEach((btn) => {
    btn.classList.remove("active");
  });
}

function handleSubmit() {
  const activeBtns = getActiveButtons();
  if (!confirmAllAnswered(activeBtns)) return;
  const userAnswers = getAllQuestions(activeBtns);
  const score = calculateScore(userAnswers);
  alertScore(score, questionsData.length);
  resetQuiz();
}

function handleRestart() {
  resetQuiz();
}

// Storage Event
root.addEventListener("click", (e) => {
  const btn = e.target.closest(".option");
  if (!btn) return;

  const qId = btn.closest(".question").dataset.id;
  const answer = btn.textContent;
  storage.save({ qId, answer });
});

// Event (reload page)
document.addEventListener("DOMContentLoaded", () => {
  const savedAnswers = storage.getAll();
  if (savedAnswers.length === 0) return;

  const btns = [...document.querySelectorAll(".option")];
  savedAnswers.forEach((ans) => {
    const btn = btns.find((b) => {
      const qId = b.closest(".question").dataset.id;
      return qId === ans.qId && b.textContent === ans.answer;
    });
    if (btn) btn.classList.add("active");
  });
});
