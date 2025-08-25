# 📘 Quiz App 

## 🎯 Objective
A single-page **Quiz App** built with **OOP principles in JavaScript (ES6 classes)**.  
The app displays all questions at once, allows reset & submit, shows a final score with pass/fail feedback, and uses **localStorage** for temporary persistence.

---

## 👤 User Stories
- As a user, I want to see all questions on the screen at once so I can answer them in any order.  
- As a user, I want multiple-choice or true/false options for each question.  
- As a user, I want a reset button to clear all my answers.  
- As a user, I want a submit button to finish the quiz.  
- As a user, I want to see my final score and pass/fail status (≥70% = pass).  
- As a user, I want my answers to be saved temporarily (via localStorage) so refreshing the page won’t lose progress.  
- As a user, once I finish the quiz, refreshing should start a new attempt.  

---

## 🔑 Acceptance Criteria
- All questions displayed at once.  
- One selected answer per question.  
- Submit → show score + pass/fail.  
- Reset → clear answers (UI + localStorage).  
- Refresh before finishing → restore answers.  
- Refresh after finishing → new attempt.  
- Use **OOP principles** (classes, inheritance, encapsulation, polymorphism).  
- At least **10 questions** (mix of multiple-choice & true/false).  

---

## 🛠️ Technical Details
- **JavaScript ES6 Classes** for `Question`, `MultipleChoiceQuestion`, `TrueFalseQuestion`, `Quiz`, etc.  
- **DOM Manipulation** to render questions, buttons, and results dynamically.  
- **localStorage** to persist answers until quiz is finished.  
- **Encapsulation & Polymorphism** to keep code clean and modular.  

---

## 📂 Project Structure
- `index.html` → main page (renders everything).  
- `style.css` → styling.  
- `app.js` → your OOP code.  
- `README.md` → this file.  
- Diagram (non-UML, e.g. Lucidchart / hand-drawn) showing class design.  

