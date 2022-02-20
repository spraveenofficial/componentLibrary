const toggleDarkMode = document.querySelector("#toggle-darkmode");
const databody = document.body;

const changeTheme = () => {
  let dark = localStorage.getItem("mode") || false;
  if (dark == false) {
    toggleDarkMode.classList.remove("fa-moon-o");
    toggleDarkMode.classList.add("fa-sun-o");
    localStorage.setItem("mode", "dark");
    databody.classList.add("dark-mode");
  } else if (dark == "dark") {
    toggleDarkMode.classList.remove("fa-sun-o");
    toggleDarkMode.classList.add("fa-moon-o");
    localStorage.setItem("mode", "light");
    databody.classList.remove("dark-mode");
  } else {
    toggleDarkMode.classList.remove("fa-moon-o");
    toggleDarkMode.classList.add("fa-sun-o");
    localStorage.setItem("mode", "dark");
    databody.classList.add("dark-mode");
  }
};

(() => {
  const mode = localStorage.getItem("mode");
  if (mode == "dark") {
    databody.classList.add("dark-mode");
    toggleDarkMode.classList.remove("fa-moon-o");
    toggleDarkMode.classList.add("fa-sun-o");
  } else {
    databody.classList.remove("dark-mode");
  }
})();
