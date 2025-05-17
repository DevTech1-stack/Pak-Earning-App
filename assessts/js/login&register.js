/////////////// MENU / THEME TOGGLE ///////////////

const LoginThemeToggle = document.getElementById("login-themeToggle");
const body = document.body;
const LoginMenuToggle = document.getElementById("login-menuToggle");
const navLinks = document.getElementById("navLinks");

LoginThemeToggle.onclick = () => {
  const isDark = body.getAttribute("data-theme") === "dark";
  body.setAttribute("data-theme", isDark ? "light" : "dark");
};

LoginMenuToggle.onclick = () => {
  navLinks.classList.toggle("active");
};
