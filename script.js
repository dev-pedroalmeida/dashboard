const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
})