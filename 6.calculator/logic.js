const btns = document.querySelectorAll(".btn");
const display = document.querySelector("#result");
const numbtn = document.querySelectorAll(".nunBtn");
const equalto = document.querySelector("#equalTo");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelector("#AC");

function clears() {
  clear.addEventListener("click", () => {
    display.visible = false;
    console.log("cleat");
  })
}

function result() {

}

function operation() {

}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    display.value += btn.value;
  })
})


clears()
