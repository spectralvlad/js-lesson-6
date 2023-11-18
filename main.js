while (true) {
  let userInput = prompt("Введіть будь-яке число:");

  if (userInput === null) {
    break; // якщо користувач натиснув "Скасувати", виходимо з гри
  }

  let number = parseFloat(userInput);

  if (isNaN(number)) {
    alert("Тільки числа, будь ласка!");
  } else if (number >= 123) {
    alert("Wow, you've ended this endless cycle!");
    break;
  } else {
    alert("Should continue");
  }
}
