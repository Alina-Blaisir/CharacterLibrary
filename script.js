const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeButton.textContent = isDark ? "☀ ✦" : "☾ ✦";
  themeButton.setAttribute("aria-label", isDark ? "Включить светлую тему" : "Включить тёмную тему");
});
