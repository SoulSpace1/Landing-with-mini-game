function gameSeasons() {
    let nmonth = prompt('Введите номер месяца');
    const seasons = ['Зима', 'Весна', 'Лето', 'Осень'];
    if (nmonth >= 1 && nmonth <= 12) {
      alert(seasons[Math.floor((nmonth % 12) / 3)]);
    } else {
      alert('Неправильный номер месяца');
    } 
};


function gameRemember() {
  let arr = [
    "Яблоко", "Груша", "Дыня", "Виноград", "Персик", "Апельсин", "Мандарин"];
  arr = arr.sort(() => Math.random() - 0.5);
  alert(arr);

  let fruit = prompt("Какой был первый фрукт?");
  let fruit2 = prompt("Какой был последний фрукт?");

  if (fruit === arr[0] && fruit2 === arr[6]) {
    alert("Угадал оба фрукта!!");
    return;
  }

  if (fruit === arr[0] || fruit2 === arr[6]) {
    alert("Очень близко, попробуй еще раз");
    return;
  }

  alert("Неверные фрукты!");
};

function gamePuzzle() {
  const puzzle = {
    question: 'Стоит дуб, в нем двенадцать гнезд, в каждом гнезде по четыре яйца, в каждом яйце по семь цыплят',
    help: ['Прочитай загадку в обратном порядке', 'Он цикличный'],
    answer: 'год',
    askQuestion() {
      let userAnswer = prompt(this.question);
      if (this.answer === userAnswer) {
        alert('Угадал! Поздравляем!')
      } else {
        if (this.help.length) {
          alert(`Не угадал!\nПодсказка: ${this.help.splice(0, 1)}`);
          puzzle.askQuestion();
        } else {
          alert('Не угадал!');
        }
      }
    }
  }
  puzzle.askQuestion();
}