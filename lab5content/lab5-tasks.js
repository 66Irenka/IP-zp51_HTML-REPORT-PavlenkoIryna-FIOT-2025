// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. 
// Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у
// властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// Завдання 1.1

function task1_1() {

  function createProduct(obj, callback) {
    const product = {
      id: Date.now(),
      ...obj,
    };

    callback(product);
  }

  function logProduct(product) {
    console.log("Інформація про товар:");
    console.log(product);
  }

  function logTotalPrice(product) {
    console.log(
      `Загальна вартість: ${product.price * product.quantity}`
    );
  }

  const product = {
    name: "Laptop",
    price: 25000,
    quantity: 2,
  };

  createProduct(product, logProduct);
  createProduct(product, logTotalPrice);
}

