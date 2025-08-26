const questionGroups = document.querySelectorAll(".options-answer");

questionGroups.forEach(group => {
  const options = group.querySelectorAll(".option");

  options.forEach(btn => {
    btn.addEventListener("click", () => {
      options.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});