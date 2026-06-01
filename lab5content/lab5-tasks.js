// Завдання 1.1
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
// Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у
// властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

function task1_1() {
  function createProduct(obj, callback) {
    const product = {
      id: Date.now(),
      ...obj,
    };

    callback(product);
  }

  function logProduct(product) {
    console.log('Інформація про товар:');
    console.log(product);
  }

  function logTotalPrice(product) {
    console.log(`Загальна вартість: ${product.price * product.quantity}`);
  }

  const product = {
    name: 'Laptop',
    price: 25000,
    quantity: 2,
  };

  createProduct(product, logProduct);
  createProduct(product, logTotalPrice);
}

// Завдання 1.3
// З об'єкту medicines потрібно отримати масив в якому будуть лише назви препаратів.
// З масиву потрібно прибрати медикаменти , в яких строк зберігання уже пройшов.
//  У новому масиві відсортувати медикаменти у хронологічному порядку. Результат вивести у консоль.
// Застосувати стрілочні функції

// const medicines = {
// Агалгін: new Date("2022-05-01"),
// Ношпа: new Date("2025-07-02"),
// Альфахолін: new Date("2024-12-21"),
// Аспірин: new Date("2022-08-15"),
// Аспаркам: new Date("2024-04-18"),
// };

function task1_3() {
  const medicines = {
    Агалгін: new Date('2022-05-01'),
    Ношпа: new Date('2025-07-02'),
    Альфахолін: new Date('2024-12-21'),
    Аспірин: new Date('2022-08-15'),
    Аспаркам: new Date('2024-04-18'),
    Агалгін: new Date('2022-05-01'),
    Ношпа: new Date('2028-07-02'),
    Альфахолін: new Date('2027-12-21'),
    Аспірин: new Date('2022-08-15'),
    Аспаркам: new Date('2026-12-18'),
  };

  const today = new Date();

  const result = Object.entries(medicines)
    .filter(([name, date]) => date > today)
    .sort((a, b) => a[1] - b[1])
    .map(([name]) => name);

  console.log('Препарати з дійсним терміном придатності:');
  console.log(result);
}


// Завдання 1.5
// Напишіть функцію, яка приймає массив об'єктів і повертає новий массивЗробіть знижку 20 % на всі
// фрукти у масивіНадайте ід для кожного продуктуconst 
// fruits = [
// { name: "apple", price: 200 },
// { name: "orange", price: 300 },
// { name: "grapes", price: 750 },
// ];

function task1_5() {
  const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
  ];

  const discountedFruits = fruits.map((fruit, index) => ({
    id: index + 1,
    name: fruit.name,
    price: fruit.price * 0.8,
  }));

  console.log("Товари зі знижкою 20%:");
  console.log(discountedFruits);
}


// Завдання 1.7
// Напиши клас Client який створює об'єкт з властивостями login email
// Оголоси приватні властивості #login #email, доступ до яких зроби 
// через геттер та сеттер login email

function task1_7() {
  class Client {
    #login;
    #email;

    constructor(login, email) {
      this.#login = login;
      this.#email = email;
    }

    get login() {
      return this.#login;
    }

    set login(newLogin) {
      this.#login = newLogin;
    }

    get email() {
      return this.#email;
    }

    set email(newEmail) {
      this.#email = newEmail;
    }
  }

  const client = new Client("irenka", "irenka@gmail.com");

  console.log("Початкові дані:");
  console.log("Login:", client.login);
  console.log("Email:", client.email);

  client.login = "newUser";
  client.email = "newuser@gmail.com";

  console.log("Після зміни:");
  console.log("Login:", client.login);
  console.log("Email:", client.email);
}


// Завдання 1.9
// Поверніть об'єкт, в якому вказано кількість тегів. 
// Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
// const tweets = [
// { id: "000", likes: 5, tags: ["js", "nodejs"] },
// { id: "001", likes: 2, tags: ["html", "css"] },
// { id: "002", likes: 17, tags: ["html", "js",
// "nodejs"] },
// { id: "003", likes: 8, tags: ["css", "react"] },
// { id: "004", likes: 0, tags: ["js", "nodejs",
// "react"] },
// ];

function task1_9() {
  const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
  ];

  const tagStats = tweets
    .flatMap(tweet => tweet.tags)
    .reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});

  console.log("Кількість використань тегів:");
  console.log(tagStats);
}


// Завдання 1.10
// Напишіть функцію checkBrackets(str) яка приймає рядок жс 
// коду (someFn) і перевіряє правильність закриття дужок () {} []
// Якщо рядок містить коректний код функція повертає
// true. В іншому випадку повертає false

function task1_10() {
  function checkBrackets(str) {
    const stack = [];

    const pairs = {
      ")": "(",
      "}": "{",
      "]": "[",
    };

    for (const char of str) {
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      }

      if (char === ")" || char === "}" || char === "]") {
        if (stack.pop() !== pairs[char]) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  console.log("Приклад 1:", checkBrackets("function test() { return [1, 2, 3]; }"));
  console.log("Приклад 2:", checkBrackets("function test( { return [1, 2, 3]; }"));
}


// Завдання 2.1
// Дано масив об'єктів. Створіть новий масив, що
// містить всі значення з масивів values кожного
// об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].
// const data = [
// { id: 1, values: [1, 2, 3] },
// { id: 2, values: [4, 5, 6] },
// { id: 3, values: [7, 8, 9] },
// ];

function task2_1() {
  const data = [
    { id: 1, values: [1, 2, 3] },
    { id: 2, values: [4, 5, 6] },
    { id: 3, values: [7, 8, 9] },
  ];

  const result = data.flatMap(item => item.values);

  console.log("Об'єднаний масив:");
  console.log(result);
}


// Завдання 2.3
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним.
// Очікуваний результат: true.
// const numbers = [2, 4, 6, 8, 10];

function task2_3() {
  const numbers = [2, 4, 6, 8, 10];

  const result = numbers.every(number => number % 2 === 0);

 console.log("Усі числа парні:", result);
}


// Завдання 2.5
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange","pear"].
// const stringArray = ['banana', 'orange', 'apple', 'pear'];

function task2_5() {
  const stringArray = ["banana", "orange", "apple", "pear"];

  const sortedArray = [...stringArray].sort();

  console.log("Відсортований масив:");
  console.log(sortedArray);
}

// Завдання 2.7
// Розроби клас Calculator, який дозволяє виконувати арифметичні операції 
// над числом за допомогою методів класу,підтримуючи ланцюжковий виклик (method chaining).
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленнямпро неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value.
// Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// Приклад використання:
// const calc = new Calculator();
// const result = calc
// .number(10) // Встановлюємо початкове значення 10
// .add(5) // Додаємо 5 (10 + 5 = 15)
// .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
// .multiply(4) // Множимо на 4 (12 * 4 = 48)
// .divide(2) // Ділимо на 2 (48 / 2 = 24)
// .getResult(); // Отримуємо результат: 24
// console.log(result); // 24

function task2_7() {
  class Calculator {
    constructor() {
      this.result = 0;
    }

    number(value) {
      this.result = value;
      return this;
    }

    add(value) {
      this.result += value;
      return this;
    }

    subtract(value) {
      this.result -= value;
      return this;
    }

    multiply(value) {
      this.result *= value;
      return this;
    }

    divide(value) {
      if (value === 0) {
        throw new Error("Ділення на нуль неможливе");
      }

      this.result /= value;
      return this;
    }

    getResult() {
      return this.result;
    }
  }

  const calc = new Calculator();

  const result = calc
    .number(10)
    .add(5)
    .subtract(3)
    .multiply(4)
    .divide(2)
    .getResult();

  console.log("Результат обчислення:", result);
}