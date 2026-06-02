// Завдання1
// У звітному HTML-документі створити html-розміту, яка складається з наступних елементів 
// : текст, кнопка, поле введення.
//  Натискання на кнопку "SHOW ME" має виводити значення з поля введення у консолі.
// У звітному HTML-документі відобразити скрін програмного коду

function task1() {
  const input = document.getElementById("messageInput");
  const button = document.getElementById("showBtn");

  if (!input || !button) return;

  button.onclick = () => {
  console.log(input.value);
  };
}

// Завдання 3
// У звітному HTML-документі створити html-розміту,
// яка складається з наступних елементів : текст, кнопка, інпут (поле введення ). 
// Кнопка "Приховати" ховає текст , виводячи зірочки замість введеної інформації, замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним і кнопка набуває початкового вигляду.
// У звітному HTML-документі відобразити скрін програмного коду

function task3() {
  const input = document.getElementById("passwordInput");
  const button = document.getElementById("togglePasswordBtn");

  if (!input || !button) return;

  button.onclick = () => {
    if (input.type === "text") {
      input.type = "password";
      button.textContent = "Розкрити";
    } else {
      input.type = "text";
      button.textContent = "Приховати";
    }
  };
}

// Завдання5
// У звітному HTML-документі створити html-розміту, яка складається з наступних елементів :
//  - текст, з використанням селектора класу (class="taskTitle" ) ,
//  - div, з використанням селектора ідентифікатора (id="place”) 
//   Додайте слухач кліку на window і визначте чи клікнув користувач у div з id="place". 
//   Примітка: Якщо користувач клікнув на зеленому прямокутнику – у консолі виведе true. 
//   У протилежному випадку - false У звітному HTML-документі відобразити скрін програмного коду

function task5() {
  
  const place = document.getElementById("place");

  if (!place) return;

  window.onclick = (event) => {
    console.log(place.contains(event.target));
  };
}


// Завдання7
// Напиши скрипт, який:
// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль
// текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в
// нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
// В результаті, в консолі будуть виведені наступні повідомлення.

function task7() {
  const categories = document.querySelectorAll("#categories .item");

  console.log("Number of categories:", categories.length);

  categories.forEach((category) => {
    const title = category.querySelector("h2").textContent;
    const elements = category.querySelectorAll("ul li").length;

    console.log("Category:", title);
    console.log("Elements:", elements);
  });
}


// Завдання 9
// <label>
// Password
// <input type="password" name="password"/>
// </label>
// <button type="submit">Log in</button>
// </form>
// 1. Обробка відправлення форми form.loginform повинна відбуватися за подією submit.
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3. Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All
// form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт 
// з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів,
//  очищені від пробілів по краях.  
// Для доступу до елементів форми використовуй властивість elements.
// 5. При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

function task8() {
  const form = document.querySelector(".login-form");

  if (!form) return;

  form.onsubmit = (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
      alert("All form fields must be filled in");
      return;
    }

    const formData = {
      email,
      password,
    };

    console.log(formData);

    form.reset();
  };
}

// Завдання 9

// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color
//  і задає це значення кольору текстовим вмістом для span.color.
//   <div class="widget"> 
//   <p>Background color: <span class="color">
//   </span></p> <button type="button" class="changecolor"> 
//   Change color</button> </div> 
// Для генерування випадкового кольору використовуй функцію 
// getRandomHexColor().
//  function getRandomHexColor() 
//  { return #${Math.floor(Math.random() * 16777215) 
//   .toString(16) .padStart(6, 0)};} 
//   Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, 
//   в той час як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function task9() {
  const button = document.querySelector(".change-color");
  const colorText = document.querySelector(".color");

  if (!button || !colorText) return;

  button.onclick = () => {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  colorText.textContent = color;

  colorText.style.color = color;
};
}


// Завдання 10
// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів.
// Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція 
// з відповідною кількістю елементів і очищатися значення в інпуті. 
// При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. 
// Після натискання на кнопку Destroy колекція елементів має очищатися.
// <div id="controls"> <input type="number" min="1" max="100" step="1" /> 
// <button type="button" datacreate>
// Create</button> <button type="button" datadestroy> Destroy</button>
// </div> <div id="boxes"> </div> 
// Після натискання користувачем на кнопку Create треба провалідувати значення в input,
// воно має бути в межах від 1 до 100 включно. 
// Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.
// Для рендеру елементів на сторінці створи функцію createBoxes(amount),
// яка приймає один параметр — число, що зберігає кількість елементів для рендеру. 
// Функція має створювати стільки <div> елементів, скільки вказано в параметрі 
// amount і додавати їх у DOM дочірніми елементами для div#boxes. 
// 1. Розміри першого <div> елемента мають бути 30px на 30px. 
// 2. Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// 3. Усі елементи повинні мати випадковий колір фону. 
// Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
// function getRandomHexColor() {
// return #${Math.floor(Math.random() * 16777215) 
// .toString(16) 
// .padStart(6, 0)};
// }
// Для очищення колекції після натискання на кнопку Destroy створи функцію 
// destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function task10() {
  const input = document.querySelector("#controls input");
  const createBtn = document.querySelector("[data-create]");
  const destroyBtn = document.querySelector("[data-destroy]");
  const boxes = document.getElementById("boxes");

  if (!input || !createBtn || !destroyBtn || !boxes) return;

  createBtn.onclick = () => {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100 || !amount) {
      alert("Введіть число від 1 до 100");
      return;
    }

    destroyBoxes();
    createBoxes(amount);
    input.value = "";
  };

  destroyBtn.onclick = () => {
    destroyBoxes();
  };

  function createBoxes(amount) {
    const elements = [];

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      const size = 30 + i * 10;

      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = "5px";

      elements.push(box);
    }

    boxes.append(...elements);
  }

  function destroyBoxes() {
    boxes.innerHTML = "";
  }
}