document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Restore last theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.innerHTML = `<i class="bi bi-sun-fill"></i>`;
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      themeToggle.innerHTML = `<i class="bi bi-sun-fill"></i>`;
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.innerHTML = `<i class="bi bi-moon-fill"></i>`;
      localStorage.setItem("theme", "light");
    }
  });
});
