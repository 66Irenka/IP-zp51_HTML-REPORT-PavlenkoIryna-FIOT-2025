// ЛР №4. Варіант 13

// Завдання №1
// Збережіть введене значення (використати метод prompt()) у змінну value
// Вивести це значення у Console, використовуючи шаблонний рядок.
// Перевірити: введене значення від’ємне? Додатнє? Дорівнює нулю?
// Відповідь вивести за допомогою alert().
// Наприклад : при введенні 80 виведе «Число додатнє»
// Підказка: При введенні значень не забудьте зробити
// ряд перевірок.



function task1() {

const valueInput = prompt("Введіть число:");

console.log(`Введене значення: ${valueInput}`);

const value = Number(valueInput);

if (valueInput === null || valueInput.trim() === "" || Number.isNaN(value)) {
  alert("Помилка: введіть коректне число");
} else {
  
  if (value > 0) {
    alert("Число додатнє");
  } else if (value < 0) {
    alert("Число від'ємне");
  } else {
    alert("Число дорівнює нулю");
  }
}
}


// Завдання 2
// Змінна number може набувати 4 значення: '1', '2', '3' або '4' (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима', якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач введе в prompt щось інше.
// Значення змінної result виведіть в консоль.


function task2() {
  const number = prompt("Введіть число від 1 до 4:");

  let result;

  switch (number) {
    case "1":
      result = "зима";
      break;
    case "2":
      result = "весна";
      break;
    case "3":
      result = "літо";
      break;
    case "4":
      result = "осінь";
      break;
    default:
      result = "некоректне значення";
  }

  console.log(`Результат: ${result}`);
}


// Завдання 3
// Є Admin та User, з відповідними паролями.
// (Об’явити , проініцілізувати) Написати програмний код, який запитуватиме у користувача логін (використати prompt) 
// і виводить результат в консоль браузера, використовуючи шаблонний рядок.
// Після цього додайте перевірку введеного користувачем значення:
// - якщо відвідувач вводить " Admin ", то prompt запитує пароль. У випадку вдалої ідентифікації в alert вивести « Hello, Admin ;
// - якщо нічого не ввели або натиснули Cancel, то вивести в alert рядок " Cancelled ";
// - в іншому випадку вивести в alert рядок " I don't know you" Теж саме виконати з User

function task3() {

const adminLogin = "Admin";
const adminPass = "1234";

const userLogin = "User";
const userPass = "qwerty";

const login = prompt("Введіть логін:");

console.log(`Введений логін: ${login}`);

if (login === null || login.trim() === "") {
  alert("Cancelled");
} else if (login === adminLogin) {
  const pass = prompt("Введіть пароль для Admin:");
  if (pass === adminPass) {
    alert("Hello, Admin");
  } else {
    alert("I don't know you");
  }
} else if (login === userLogin) {
  const pass = prompt("Введіть пароль для User:");
  if (pass === userPass) {
    alert("Hello, User");
  } else {
    alert("I don't know you");
  }
} else {
  alert("I don't know you");
}
}


// Завдання 4
// Станція з продажу ремонтних дроїдів. Оголоси функцію makeTransaction, яка очікує два
// параметри, значення яких будуть задаватися під час її виклику: • quantity— перший параметр, число, що
// містить кількість замовлених дроїдів • pricePerDroid — другий параметр, число, що містить вартість
// одного дроїда Напиши код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів:
// "You ordered <quantity> droids worth <totalPrice>
// credits!", де:
// • <quantity> — це кількість замовлених дроїдів
// • <totalPrice> — це загальна вартість замовлення,
// тобто вартість усіх замовлених дроїдів

function task4() {

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;

  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1500));
console.log(makeTransaction(10, 500));
}



// Завдання 5
// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, 
// і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.
// Доповни код функції таким чином, що:
// - Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// - Якщо в рядку відсутні заборонені слова,
// функція повертає буль false

function task5() {
  function checkForSpam(message) {
    const normalizedMessage = message.toLowerCase();

    return (
      normalizedMessage.includes("spam") ||
      normalizedMessage.includes("sale")
    );
  }

  console.log(checkForSpam("Buy huge SALE now!"));
  console.log(checkForSpam("This is just a normal message"));
  console.log(checkForSpam("Get rid of unwanted SPAM"));
}



// Завдання 6
// Напиши функцію filterArray(numbers, value),яка приймає масив чисел (numbers) та значення (value) як параметри. Функція
// повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value. Усередині функції:
// - Створи порожній масив, у який будеш додавати підходящі числа.
// - Використай цикл для ітерації кожного елемента масиву numbers.
// - Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

function task6() {

function filterArray(numbers, value) {

  const filteredNumbers = [];

    for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

       if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); 
}



// Завдання 7, варіант 3
// 1.Заданий одновимірний масив А, кількість елементів якого задана користувачем.
// Побудувати масив В, кожний елемент якого обчислюється за формулою :
// bі = max*ai де - max це максимальний елемент масиву А. Надрукувати вхідний та вихідний масиви. Застосувати функції.
// 2. Виконати сортування вихідного масиву за зменшенням методом вставки.
// Застосувати функції

function task7() {
  function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }

    return max;
  }

  function createArrayB(arrA, maxVal) {
    const arrB = [];

    for (let i = 0; i < arrA.length; i++) {
      arrB.push(maxVal * arrA[i]);
    }

    return arrB;
  }

  function insertionSortDescending(arr) {
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] < key) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = key;
    }

    return arr;
  }

  const arrA = [3, 7, 2, 9, 5];
  const maxVal = findMax(arrA);
  const arrB = createArrayB(arrA, maxVal);
  const sortedArrB = insertionSortDescending([...arrB]);

  console.log("Масив A:", arrA);
  console.log("Максимальний елемент:", maxVal);
  console.log("Масив B:", arrB);
  console.log("Масив B після сортування:", sortedArrB);
}


// Завдання 8
// Є двовимірний масив додатніх і від’ємних чисел. (об’явити проініціалізувати генератором випадкових
// чисел). Вивести у Console браузера. Створити два масива: масив додатніх чисел і масив
// від’ємних чисел. Третій елемент у додатньому масиві заміни на від’ємне значення, яке буде введено за допомогою
// prompt Вивести у Console браузера.
// 1. Створюємо двовимірний масив (матрицю) 3x3 з випадковими числами від -10 до 10

function task8() {
const matrix = [
  [5, -2, 8],
  [-1, 3, -7],
  [4, 0, -6]
];

console.log("Початковий масив:", matrix);

const positiveNumbers = [];
const negativeNumbers = [];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    const value = matrix[i][j];
    
    if (value > 0) {
      positiveNumbers.push(value);
    } else if (value < 0) {
      negativeNumbers.push(value);
    }
  }
}

console.log("Додатні:", positiveNumbers);
console.log("Від'ємні:", negativeNumbers);

if (positiveNumbers.length >= 3) {
  const newNegative = prompt("Введіть нове від'ємне число для заміни третього елемента:");
  positiveNumbers[2] = Number(newNegative);
} else {
  alert("У масиві додатніх менше ніж 3 елементи, заміна неможлива.");
}

console.log("Додатні після заміни:", positiveNumbers);
}
