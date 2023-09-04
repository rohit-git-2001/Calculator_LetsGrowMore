let input = document.getElementById("inputField");
let buttons = document.querySelectorAll("button");

let value = "";
let buttonArray = Array.from(buttons);

buttonArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      value = eval(value);
      input.value = value;
    } else if (e.target.innerHTML == "AC") {
      value = "";
      input.value = value;
    } else if (e.target.innerHTML == "DE") {
      value = value.substring(0, value.length - 1);
      input.value = value;
    } else {
      value += e.target.innerHTML;
      input.value = value;
    }
  });
});
