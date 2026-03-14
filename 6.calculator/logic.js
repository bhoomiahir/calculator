const btns = document.querySelectorAll(".btn");
const display = document.querySelector("#result");
const numbtn = document.querySelectorAll(".nunBtn");
const equalto = document.querySelector("#equalTo");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelector("#AC");


clear.addEventListener("click", () => {
    display.value = '';
});

function result() {
    try {
        const expression = display.value;
        if (!expression) return;

        // Evaluate the full expression shown on screen.
        // NOTE: eval() is fine for this simple calculator, but do not use it with untrusted input.
        const computed = eval(expression);
        display.value = computed;
    } catch {
        display.value = "Error";
    }
}

equalto.addEventListener("click", result);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Avoid appending '=' or 'AC' to the display; those are handled separately.
    if (btn === equalto || btn === clear) return;

    display.value += btn.value;
  });
});