let firstNumber, secondNumber;

while (true) {
  let firstInput = prompt("Введіть перше число:");
  let secondInput = prompt("Введіть друге число:");

  if (firstInput === null || secondInput === null) {
    break; // якщо користувач натиснув "Скасувати", виходимо з гри
  }

  firstNumber = parseFloat(firstInput);
  secondNumber = parseFloat(secondInput);

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Тільки числа, будь ласка!");
  } else {
    break; // якщо введено числа, виходимо з циклу
  }
}

let sum = 0;
let product = 1;

// знаходимо мінімум та максимум для ітерації по діапазону
let min = Math.min(firstNumber, secondNumber);
let max = Math.max(firstNumber, secondNumber);

for (let i = min; i <= max; i++) {
  if (i % 2 === 0) {
    product *= i; // обчислення добутку парних чисел
  } else {
    sum += i; // обчислення суми непарних чисел
  }
}

alert(`Сума = ${sum}, Добуток = ${product}`);
