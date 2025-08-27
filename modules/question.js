export class Question {
  constructor(questionText, options) {
    this.question = questionText;
    this.options = options;
  }

  create() {
    const wrap = document.createElement("div");
    wrap.className = "question";

    const qText = document.createElement("div");
    qText.className = "question-text";
    qText.textContent = this.question;

    const opts = document.createElement("div");
    opts.className = "options-answer";

    this.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.type = "button";
      btn.textContent = opt;

      // to remove active class if contains
      btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) {
          btn.classList.remove("active");
          return;
        }

        opts
          .querySelectorAll(".option")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });

      opts.append(btn);
    });

    wrap.append(qText, opts);
    return wrap;
  }
}
