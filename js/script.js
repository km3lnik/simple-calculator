const num1 = document.querySelector("#num1");
const num2 = document.getElementById('num2');
const getResultBtn = document.querySelector('.get-result');

//operations
const plus = document.querySelector('[data-value="+"]'); 
const minus = document.querySelector('[data-value="-"]');
const division = document.querySelector('[data-value="/"]');
const mult = document.querySelector('[data-value="*"]');

//result
const result = document.querySelector('#result');

let accumulator = 0;

getResultBtn.addEventListener('click', function () {
    result.innerHTML = accumulator;
    num1.value = "";
    num2.value = "";
});
plus.addEventListener('click', function () {
    if (+num1.value && +num2.value) {
        accumulator = +num1.value + +num2.value;
    }
});
minus.addEventListener('click', function () {
    if (+num1.value && +num2.value) {
        accumulator = num1.value - num2.value;
    }
});
division.addEventListener('click', function () {
    if (+num1.value && +num2.value || +num1.value && +num2.value === 0) {
        accumulator = +num1.value / +num2.value;
    }
    console.log (accumulator);
});
mult.addEventListener('click', function () {
    if (+num1.value && +num2.value) {
        accumulator = num1.value * num2.value;
    }
});







