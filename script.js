const display = document.getElementById("display");
const buttons = document.querySelectorAll("button")

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    let val = btn.innerText;

    if (val === "AC") {
      display.value = "";
      return;
    }

    if (val === "←") {
      display.value = display.value.slice(0, -1);
      return;
    }

    if (val === "%") {
      if (display.value !== "")
        display.value = String(parseFloat(display.value) / 100);
      return;
    }

    if (val === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
      return;
    }

    let operators = ["+", "-", "*", "/"];
    let lastChar = display.value.slice(-1);

    if (operators.includes(val) && operators.includes(lastChar))
        return;

    display.value += val;2+
  });
});
