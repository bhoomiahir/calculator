const btns = document.querySelectorAll(".btn");
const display = document.querySelector("#result");
const equalto = document.querySelector("#equalTo");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelector("#AC");


clear.addEventListener("click", () => {
    display.value = '';
});

function result() {
    try {
        const expression = display.value.trim();
        if (!expression) return;
        const computed = eval(expression);
        display.value = computed;
    } catch {
        display.value = "Error";
    }
}

equalto.addEventListener("click", result);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn === equalto || btn === clear) return;

    display.value += btn.value;
  });
});