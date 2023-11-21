function guessNumber() {
  const input = prompt("Введіть будь-яке число:");
  const number = parseFloat(input);

  if (isNaN(number)) {
    console.log("Тільки числа, будь ласка!");
    guessNumber(); // Рекурсивний виклик функції для повторного запиту числа
  } else if (number >= 123) {
    console.log("Wow, you've ended this endless cycle!");
  } else {
    console.log("Should continue");
    guessNumber(); // Рекурсивний виклик функції для продовження гри
  }
}

guessNumber(); // Початок гри
