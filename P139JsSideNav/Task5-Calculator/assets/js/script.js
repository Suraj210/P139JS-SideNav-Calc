"use strict";

let firstNum = document.querySelector(".first-num");
let secondNum = document.querySelector(".second-num");
let alertSpan1 = document.querySelector(".text-alert--1");
let alertSpan2 = document.querySelector(".text-alert--2");
let add = document.querySelector(".btn-add");
let minus = document.querySelector(".btn-minus");
let multiply = document.querySelector(".btn-multiply");
let divide = document.querySelector(".btn-divide");
let result = document.querySelector(".btn-result");

add.addEventListener("click", function () {
  if (firstNum.value == "") {
    alertSpan1.style.display = "block";
    return;
  }
  alertSpan1.style.display = "none";

  if (secondNum.value == "") {
    alertSpan2.style.display = "block";
    return;
  }

  alertSpan2.style.display = "none";

  let addResult = Number(firstNum.value) + Number(secondNum.value);
  result.value = addResult;

  firstNum.value = "";
  secondNum.value = "";
});

minus.addEventListener("click", function () {
  if (firstNum.value == "") {
    alertSpan1.style.display = "block";
    return;
  }
  alertSpan1.style.display = "none";

  if (secondNum.value == "") {
    alertSpan2.style.display = "block";
    return;
  }

  alertSpan2.style.display = "none";

  let addResult = Number(firstNum.value) - Number(secondNum.value);
  result.value = addResult;

  firstNum.value = "";
  secondNum.value = "";
});

multiply.addEventListener("click", function () {
  if (firstNum.value == "") {
    alertSpan1.style.display = "block";
    return;
  }
  alertSpan1.style.display = "none";

  if (secondNum.value == "") {
    alertSpan2.style.display = "block";
    return;
  }

  alertSpan2.style.display = "none";

  let addResult = Number(firstNum.value) * Number(secondNum.value);
  result.value = addResult;

  firstNum.value = "";
  secondNum.value = "";
});

divide.addEventListener("click", function () {
  if (firstNum.value == "") {
    alertSpan1.style.display = "block";
    return;
  }
  alertSpan1.style.display = "none";

  if (secondNum.value == "") {
    alertSpan2.style.display = "block";
    return;
  }

  alertSpan2.style.display = "none";

  let addResult = Number(firstNum.value) / Number(secondNum.value);
  result.value = addResult;

  firstNum.value = "";
  secondNum.value = "";
});
