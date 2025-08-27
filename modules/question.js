// مثال: Named export
export class Question {
  constructor(questionText, options) {
    this.question = questionText;
    this.options = options;
    this.el = null;
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

      // حدث التفعيل داخل create عشان يشتغل على العناصر الجديدة
      btn.addEventListener("click", () => {
        opts.querySelectorAll(".option").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });

      opts.append(btn);
    });

    wrap.append(qText, opts);
    this.el = wrap;
    return wrap;
  }
}
