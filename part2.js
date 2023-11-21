let firstNumber, secondNumber;

let isValidInput = false;

while (!isValidInput) {
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
    isValidInput = true;
  }
}

if (isValidInput) {
  let sum = 0;
  let product = 1;

  let min = Math.min(firstNumber, secondNumber);
  let max = Math.max(firstNumber, secondNumber);

  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      product *= i;
    } else {
      sum += i;
    }
  }

  alert(`Сума = ${sum}, Добуток = ${product}`);
}
