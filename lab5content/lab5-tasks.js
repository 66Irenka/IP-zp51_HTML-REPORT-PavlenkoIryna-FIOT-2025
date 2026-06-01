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
