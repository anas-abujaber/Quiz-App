# TECH.md  — Quiz App

Welcome! This is a simple **Quiz App** made with plain **HTML, CSS, and JavaScript**.
No backend, no databases — everything runs in your browser.

---

## 1) What does it do?

* Shows multiple‑choice and true/false questions on one page.
* You click your answers and press **Submit** to see your score.
* If you pass **70% or more**, the header shows you passed.
* You can press **Restart** to clear answers and try again.
* Your choices are saved temporarily in your browser (localStorage) so a refresh won’t lose them.

---

## 2) Files (what’s inside)

* **index.html** — the web page layout (header, buttons, quiz container).
* **style.css** — colors, spacing, and visual styles.
* **app.js** — main logic: render questions, handle submit/restart, save answers.
* **modules/question.js** — a small class that builds one question block with its options.
* **modules/storage.js** — tiny helper to save and read answers from localStorage.
* **data/questions.data.js** — the list of questions and correct answers.

Folder layout:

```
.
├── index.html
├── style.css
├── app.js
├── modules/
│   ├── question.js
│   └── storage.js
└── data/
    └── questions.data.js
```

---

## 3) How to run it (the easy way)

Because the project uses **ES module imports** (in `app.js`), it’s best to use a tiny local server:

**VS Code :**

1. Open the folder in **Visual Studio Code**.
2. Install the extension **Live Server** (by Ritwick Dey).
3. Right‑click `index.html` → **Open with Live Server**.

---

## 4) How scoring works (simple)

* Each question has **one** correct answer.
* **MCQ** questions store the correct option by its **index** (0, 1, 2, ...).
* **True/False** questions store a boolean (`correct: true` → "True" is correct).
* When you press **Submit**, the app counts how many you got right and shows a message.

---

## 5) Change the questions

Open `data/questions.data.js` and edit or add items:

```js
{
  id: 18,
  type: "mcq", // or "tf"
  text: "Your question text here",
  options: ["A", "B", "C", "D"],
  answer: 0 // correct option index for MCQ
}
```

For **True/False**:

```js
{
  id: 19,
  type: "tf",
  text: "HTML is a programming language.",
  options: ["True", "False"],
  correct: false
}
```

> Keep `id` unique. For MCQ, make sure `answer` matches the correct option’s position starting from 0.

---

## 6) Tweak the look (colors & spacing)

Open `style.css` and play with these:

* Page background: `body { background-color: #0f172a; }`
* Card color: `.question { background-color: #0f172a; }`
* Selected option color: `.option.active { background-color: orange; }`
* Grid columns for options: `.options-answer { grid-template-columns: 1fr 1fr; }`

Small example:

```css
/* Make options taller */
.option { height: 48px; }
/* Rounder corners */
.question, .option { border-radius: 12px; }
```

---

## 7) Common issues 

* **Blank page / red errors in console** → Use Live Server or a local server (see section 3).
* **Clicking an option doesn’t stay selected** → That question allows only one active option; click again to deselect or choose another option.
* **Score looks wrong** → For MCQ, check the `answer` index matches the correct option.

---

## 8) Short explanation 

This app builds HTML for each question using a small JavaScript class. When you click an option, it gets an `active` style and is saved to localStorage. On **Submit**, the app compares your choices with the correct answers and shows your score. **Restart** clears the saved choices so you can try again.


