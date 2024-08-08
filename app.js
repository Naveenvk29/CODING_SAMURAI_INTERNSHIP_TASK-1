const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".calculator button");
const btnArr = Array.from(buttons);
let string = "";
const lightModeBtn = document.getElementById("light-mode");
const darkModeBtn = document.getElementById("dark-mode");
const body = document.body;

lightModeBtn.addEventListener("click", () => {
  body.classList.add("light-mode");
  body.classList.remove("dark-mode");
  lightModeBtn.classList.add("active");
  darkModeBtn.classList.remove("active");
});

darkModeBtn.addEventListener("click", () => {
  body.classList.add("dark-mode");
  body.classList.remove("light-mode");
  darkModeBtn.classList.add("active");
  lightModeBtn.classList.remove("active");
});

btnArr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML === "=") {
      try {
        string = eval(string);
        display.value = string;
      } catch {
        display.value = "Error";
      }
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
