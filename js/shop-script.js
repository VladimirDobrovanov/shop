// burger
document.getElementById('burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
  });

// Массив продуктов
// Данные о товарах



let productsData = [
    { id: 101, name: 'Стикерпак А5 «Энн с зелёных крыш»', price: 250, image: 'img/stickers-1.jpg', description: 'Описание товара 1' },
    { id: 102, name: 'Cтикерпак «букет незабудок»', price: 200, image: 'img/stickers-2.jpg', description: 'Описание товара 2' },
    { id: 103, name: 'Стикерпак «нежные ландыши»', price: 200, image: 'img/stickers-3.jpg', description: 'Описание товара 3' },
    { id: 104, name: 'Cтикерпак «Крыски»', price: 190, image: 'img/stickers-4.jpg', description: 'Описание товара 4' },
    { id: 105, name: 'Стикерпак «чай с сиренью»', price: 150, image: 'img/stickers-5.jpg', description: 'Описание товара 5' },
    { id: 106, name: 'Cтикерпак «Энн с зелёных крыш»', price: 200, image: 'img/stickers-6.jpg', description: 'Описание товара 6' },
    { id: 107, name: 'Cтикерпак «сельские скетчи»', price: 120, image: 'img/stickers-7.jpg', description: '#' },
    { id: 108, name: '"Мини пак «домик Элисы»"', price: 100, image: 'img/stickers-8.jpg', description: '#' },
    { id: 109, name: 'стикерпак «винтажный гербарий»', price: 100, image: 'img/stickers-9.jpg', description: '#' },
    { id: 110, name: 'стикерпак «осенний уют»', price: 120, image: 'img/stickers-10.jpg', description: '#' },
    { id: 111, name: 'Стикерпак «зарисовки для дневника»', price: 120, image: 'img/stickers-11.jpg', description: '#' },
    { id: 112, name: 'Стикербокс «набор мелочей»', price: 120, image: 'img/stickers-12.jpg', description: '#' },
    { id: 113, name: '«Сюрприз» набор стикеров', price: 120, image: 'img/stickers-13.jpg', description: '#' },
    { id: 114, name: 'Стикербокс «Лисий»', price: 120, image: 'img/stickers-14.jpg', description: '#' },
    { id: 115, name: 'Набор наклеек «Букет незабудок»', price: 120, image: 'img/stickers-15.jpg', description: '#' },
    { id: 116, name: 'Стикербокс «Энн»', price: 120, image: 'img/stickers-16.jpg', description: '#' },
    { id: 20, name: 'открытка «царица Эсфирь»', price: 80, image: 'img/postcards-1.jpg', description: '#' },
    { id: 21, name: 'открытка «песнь песней»', price: 80, image: 'img/postcards-2.jpg', description: '#' },
    { id: 22, name: 'Открытка «чаепитие в весеннем саду»', price: 80, image: 'img/postcards-3.jpg', description: '#' },
    { id: 23, name: 'постер «весна и ландыши»', price: 100, image: 'img/postcards-4.jpg', description: '#' },
    { id: 24, name: 'Открытка «Руфь»', price: 80, image: 'img/postcards-5.jpg', description: '#' },
    { id: 25, name: 'Открытка «в гостях у рукодельницы»', price: 80, image: 'img/postcards-6.jpg', description: '#' },
    { id: 26, name: 'открытка «мамины объятия»', price: 80, image: 'img/postcards-7.jpg', description: '#' },
    { id: 27, name: 'открытка «леди с ландышами»', price: 80, image: 'img/postcards-8.jpg', description: '#' },
    { id: 28, name: 'мини открытка «крыска солнышко»', price: 50, image: 'img/postcards-9.jpg', description: '#' },
    { id: 29, name: 'Открытка «весенняя полка вдохновения»', price: 90, image: 'img/postcards-10.jpg', description: '#' },
    { id: 30, name: 'Открытка «зарисовки в дневнике»', price: 90, image: 'img/postcards-11.jpg', description: '#' },
    { id: 31, name: 'Открытка «наблюдай и вдохновляйся»', price: 80, image: 'img/postcards-12.jpg', description: '#' },
    { id: 32, name: 'открытка «весна в сердце»', price: 80, image: 'img/postcards-13.jpg', description: '#' },
    { id: 33, name: 'открытка «Друзья»', price: 80, image: 'img/postcards-14.jpg', description: '#' },
    { id: 34, name: 'открытка «чудо»', price: 45, image: 'img/postcards-15.jpg', description: '#' },
    { id: 35, name: 'мини открытка «лисички сестрички»', price: 40, image: 'img/postcards-16.jpg', description: '#' },
    { id: 36, name: 'Закладка «Лисички сестрички»', price: 40, image: 'img/postcards-17.jpg', description: '#' },
    { id: 37, name: 'Закладка «чай с сиренью»', price: 40, image: 'img/postcards-18.jpg', description: '#' },
    { id: 41, name: 'Бокс «мухомор»', price: 1250, image: 'img/sets-1.jpg', description: '#' },
    { id: 42, name: 'конвертик энн»', price: 500, image: 'img/sets-2.jpg', description: '#' },
    { id: 43, name: 'Набор для творчества (милый)', price: 200, image: 'img/sets-3.jpg', description: '#' },
    { id: 44, name: 'Мини набор для творчества (винтажный)', price: 200, image: 'img/sets-4.jpg', description: '#' },
    { id: 45, name: 'Секретный конверт а6', price: 350, image: 'img/sets-5.jpg', description: '#' },
    { id: 46, name: 'Винтажные наборы для творчества', price: 500, image: 'img/sets-6.jpg', description: '#' },
];


// Функция для создания карточки товара
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');
  card.innerHTML = `
      <img class="product-img" src="${product.image}" alt="${product.name}">
      <h3 class="product-name" data-product-id="${product.id}">${product.name}</h3>
      <p>Цена: ${product.price} руб</p>
      <button class="btn-reset buy-button"  data-product-id="${product.id}">Добавить в корзину</button>
  `;
  return card;
}

// Функция для отображения карточек товаров на странице
function displayProducts(products) {
  const productsContainer = document.querySelector('.products');
  productsContainer.innerHTML = ''; // Очищаем контейнер товаров

  // Добавляем каждую карточку товара в контейнер
  products.forEach(product => {
      const card = createProductCard(product);
      productsContainer.appendChild(card);
  });
}

// Обработчик события для кнопок "Добавить в корзину" на карточках товаров
document.querySelector('.products').addEventListener('click', function(event) {
  const button = event.target.closest('.buy-button');
  if (button) {
      // Находим родительскую карточку товара
      const productCard = event.target.closest('.product-card');
      if (productCard) {
          // Получаем ID продукта из атрибута data-product-id
          const productId = parseInt(productCard.querySelector('.product-name').dataset.productId);
          // Находим объект продукта в массиве по его ID
          const product = productsData.find(product => product.id === productId);
          if (product) {
              // Добавляем продукт в корзину
              addToCart(product);
              // Обновляем отображение корзины
              displayCartItems();
          }
      }
  }
});

// Отображение карточек товаров при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  displayProducts(productsData);
});


//////////////////////////////////////////////////////////////

// Получаем кнопку поиска и инпут поиска
const searchButton = document.getElementById('search');
const searchInput = document.getElementById('searchInput');
const headerSearch = document.querySelector('.header__search');

// Обработчик события для отображения/скрытия инпута поиска при клике на кнопку поиска
searchButton.addEventListener('click', function () {
  headerSearch.classList.toggle('active');
  if (headerSearch.classList.contains('active')) {
      searchInput.focus(); // Фокус на инпуте при отображении
  } else {
      searchInput.blur(); // Убираем фокус с инпута при скрытии
  }
});

// Обработчик события для скрытия инпута поиска при клике в любом месте на сайте
document.addEventListener('click', function (event) {
  if (!event.target.closest('.header__search') && !event.target.closest('#search')) {
      headerSearch.classList.remove('active');
  }
});

// Функция для фильтрации карточек товаров по названию
function filterProductsByName(query) {
  const filteredProducts = productsData.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
  );
  displayProducts(filteredProducts);
}

// Функция для отображения найденных товаров без дубликатов
function displayFoundProducts(products) {
  const productList = document.getElementById('products');
  productList.innerHTML = ''; // Очищаем список товаров

  // Добавляем каждый товар в список
  products.forEach(product => {
    const card = createProductCard(product);
    productList.appendChild(card);
  });
}

// Обработчик события ввода текста в инпут поиска
searchInput.addEventListener('input', function (event) {
  const searchText = event.target.value.trim();
  filterProductsByName(searchText);
});


//////////////////////////////////////////////////////////////

// Функция для фильтрации товаров по id
function filterProductsByCategory(startingDigits) {
  const filteredProducts = productsData.filter(product => {
    const productId = product.id.toString();
    return productId.startsWith(startingDigits);
  });
  displayProducts(filteredProducts); // Отображаем отфильтрованные товары
}

// Получаем кнопки для каждой категории товаров
const postcardsButtonBurger = document.getElementById('postcardsButtonBurger');
const stickersButtonBurger = document.getElementById('stickersButtonBurger');
const setsButtonBurger = document.getElementById('setsButtonBurger');
const decoratingButtonBurger = document.getElementById('decoratingButtonBurger');
const accessoriesButtonBurger = document.getElementById('accessoriesButtonBurger');
const popularButtonBurger = document.getElementById('popularButtonBurger');

// Обработчики событий для каждой кнопки
postcardsButtonBurger.addEventListener('click', function () {
  filterProductsByCategory('2') || filterProductsByCategory('3');
});

stickersButtonBurger.addEventListener('click', function () {
  filterProductsByCategory('1');
});

setsButtonBurger.addEventListener('click', function () {
  filterProductsByCategory('4');
});

decoratingButtonBurger.addEventListener('click', function () {
  filterProductsByCategory('5');
});

accessoriesButtonBurger.addEventListener('click', function () {
  filterProductsByCategory('6');
});

popularButtonBurger.addEventListener('click', function () {
  filterProductsByCategory('7');
});

// Получаем кнопки для каждой категории товаров
const postcardsButton = document.getElementById('postcardsButton');
const stickersButton = document.getElementById('stickersButton');
const setsButton = document.getElementById('setsButton');
const decoratingButton = document.getElementById('decoratingButton');
const accessoriesButton = document.getElementById('accessoriesButton');
const popularButton = document.getElementById('popularButton');

// Обработчики событий для каждой кнопки
postcardsButton.addEventListener('click', function () {
  filterProductsByCategory('2') || filterProductsByCategory('3');
});

stickersButton.addEventListener('click', function () {
  filterProductsByCategory('1');
});

setsButton.addEventListener('click', function () {
  filterProductsByCategory('4');
});

decoratingButton.addEventListener('click', function () {
  filterProductsByCategory('5');
});

accessoriesButton.addEventListener('click', function () {
  filterProductsByCategory('6');
});

popularButton.addEventListener('click', function () {
  filterProductsByCategory('7');
});

//////////////////////////////////////////////////////////////

// Функция для отображения popup с описанием товара
function showProductPopup(product) {
  const popup = document.getElementById('popup');
  const popupImage = document.getElementById('popupImage');
  const popupName = document.getElementById('popupName');
  const popupPrice = document.getElementById('popupPrice');
  const popupDescription = document.getElementById('popupDescription');
  const popupMaterial = document.getElementById('popupMaterial');

  popupImage.src = product.image;
  popupName.textContent = product.name;
  popupPrice.textContent = `Цена: ${product.price} руб`;
  popupDescription.textContent = product.description;
  popupMaterial.textContent = `Материал: ${product.material || 'Не указан'}`;

  // Отображаем popup
  popup.style.display = 'block';

  // Добавляем класс для затемнения заднего фона
  document.querySelector('.products').classList.add('popup-open');
}

// Обработчик события нажатия на название товара для отображения popup
document.getElementById('products').addEventListener('click', function(event) {
  if (event.target.classList.contains('product-name')) {
    const productId = event.target.dataset.productId;
    const product = productsData.find(product => product.id === parseInt(productId));
    if (product) {
      showProductPopup(product);
    }
  }
});

// Обработчик события нажатия на кнопку "Закрыть" в popup
document.getElementById('close').addEventListener('click', function() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';

  // Удаляем класс для затемнения заднего фона
  document.querySelector('.products').classList.remove('popup-open');
});

////////////////////////////////////////////////////////////////


//СТРАНИЦА КОРЗИНЫ

// Получаем ссылку на кнопку корзины
const cartButton = document.getElementById('cart');

// Получаем ссылку на блок корзины
const cartHidden = document.querySelector('.cart__hidden');

// Получаем ссылку на контейнер корзины
const cartContainer = document.querySelector('.cart__container');

// Получаем ссылку на кнопку "назад" в корзине
const backButton = document.createElement('button');
backButton.classList.add('btn-reset', 'back-button');
backButton.textContent = 'Назад';

// Функция для отображения страницы с корзиной
function showCartPage() {
    // Показываем блок корзины
    cartHidden.style.display = 'block';
    cartHidden.style.opacity = '1'; // Добавляем эффект появления

  // Показываем кнопку "назад" в контейнере корзины
  cartContainer.appendChild(backButton);
 // Формируем содержимое корзины для отправки на почту
 const cartItems = getCartFromPage(); // Получаем корзину из Local Storage
 let cartContent = ''; // Строка для хранения содержимого корзины
 cartItems.forEach(item => {
     cartContent += `${item.name}: ${item.quantity} шт., Цена: ${item.price * item.quantity} руб.\n`;
 });
 const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

 // Заблокировать скролл на основной странице
 document.body.style.overflow = 'hidden';
}

// Функция для скрытия страницы с корзиной
function hideCartPage() {
    // Скрываем блок корзины
    cartHidden.style.display = 'none';

    // Разблокировать скролл на основной странице
    document.body.style.overflow = 'auto';
}

// Добавляем обработчик события клика на кнопку корзины
cartButton.addEventListener('click', showCartPage);

// Добавляем обработчик события клика на кнопку "назад"
backButton.addEventListener('click', hideCartPage);

// Функция для получения корзины из Local Storage
function getCartFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Функция для сохранения корзины в Local Storage
function saveCartToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}


// Функция для обновления итоговой стоимости
function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    totalPriceElement.textContent = totalPrice;
}


// Функция для обновления количества товаров на иконке корзины
function updateCartIconCount() {
  const cartIcon = document.querySelector('.header__button-cart');
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  cartIcon.setAttribute('data-count', cartItemCount); // Устанавливаем атрибут data-count для отображения количества товаров
}

// Функция для обновления числа в красном кружке
function updateCartCount(count) {
  const cartButton = document.getElementById('cart');
  cartButton.dataset.count = count;

  // Получаем или создаем элемент для отображения красного кружка
  let countBadge = document.querySelector('.cart-count-badge');
  if (!countBadge) {
      countBadge = document.createElement('span');
      countBadge.classList.add('cart-count-badge');
      cartButton.appendChild(countBadge);
  }

  // Обновляем значение числа в кружке
  countBadge.textContent = count > 9 ? '9+' : count;
}

// Функция для отображения красного кружка
function showCartCount() {
  const cartItems = getCartFromLocalStorage(); // Получаем корзину из Local Storage
  const count = cartItems.reduce((total, item) => total + item.quantity, 0); // Считаем общее количество товаров в корзине
  updateCartCount(count); // Обновляем отображение красного кружка
}

// Функция для добавления товара в корзину
function addToCart(product) {
  let cart = getCartFromLocalStorage();
  const existingItemIndex = cart.findIndex(item => item.id === product.id);
  if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity++;
  } else {
      cart.push({ ...product, quantity: 1 });
  }
  saveCartToLocalStorage(cart);
  showCartCount(); // Обновляем отображение красного кружка после добавления товара
  displayCartItems(); // Перерисовываем корзину после добавления товара
}

// Функция для удаления товара из корзины
function removeFromCart(productId) {
  let cart = getCartFromLocalStorage();
  cart = cart.filter(item => item.id !== productId);
  saveCartToLocalStorage(cart);
  showCartCount(); // Обновляем отображение красного кружка после удаления товара
  displayCartItems(); // Перерисовываем корзину после удаления товара
}

// Функция для отображения товаров в корзине

let cartItems = []; // Определение переменной cartItems в глобальной области видимости

function displayCartItems() {
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = ''; // Очищаем контейнер товаров

  cartItems = getCartFromLocalStorage(); // Получаем корзину из Local Storage

  // Добавляем каждый товар в контейнер
  cartItems.forEach(item => {
      const cartItemElement = document.createElement('div');
      cartItemElement.classList.add('cart-item');
      cartItemElement.innerHTML = `
      <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="item__container-cart">
          <div class="item__cart-name">${item.name}</div>
          <div class="item__cart-price">${item.price * item.quantity} руб</div>
          <div class="item__cart-calc">
              <button class="quantity-button" data-action="decrease" data-id="${item.id}">-</button>
              <span>${item.quantity}</span>
              <button class="quantity-button" data-action="increase" data-id="${item.id}">+</button>
          </div>
          <button class="remove-button" data-id="${item.id}">Удалить</button>
      </div>
      `;
      cartItemsContainer.appendChild(cartItemElement);
  });

  updateTotalPrice(); // Обновляем итоговую стоимость
}

// Функция для обработки событий увеличения и уменьшения количества товара
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('quantity-button')) {
      const action = event.target.dataset.action;
      const itemId = parseInt(event.target.dataset.id);
      const itemIndex = cartItems.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
          if (action === 'increase') {
              cartItems[itemIndex].quantity++;
          } else if (action === 'decrease') {
              if (cartItems[itemIndex].quantity > 1) {
                  cartItems[itemIndex].quantity--;
              } else {
                  cartItems.splice(itemIndex, 1);
              }
          }
          saveCartToLocalStorage(cartItems);
          showCartCount(); // Обновляем отображение красного кружка после изменения количества товара
          displayCartItems(); // Перерисовываем корзину после изменения количества товара
      }
  }
});

// Обработчик события для кнопки "Удалить"
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove-button')) {
      const itemId = parseInt(event.target.dataset.id);
      removeFromCart(itemId); // Вызываем функцию для удаления товара из корзины
  }
});

// Отображение товаров в корзине при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  showCartCount(); // Обновляем отображение красного кружка при загрузке страницы
  displayCartItems(); // Отображаем товары в корзине при загрузке страницы
});




////////////////////////////////////////////////////////////////



  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const checkoutButton = document.getElementById('checkoutButton');
    
    // Обработчик события отправки формы
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        const formData = new FormData(form);
        const cartItems = getCartItems();
        formData.append('cartItems', cartItems);
        
        // Отправка данных формы на сервер
        fetch('./sendmail.php', {
          method: 'POST',
          body: formData
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Ошибка сети');
          }
          return response.text();
        })
        .then(data => {
          // Обработка успешного ответа
          // alert(data); // Выводим сообщение о успешной отправке заказа
          localStorage.clear(); // Очищаем корзину на стороне клиента
          window.location.href = 'order_confirmation.html'; // Перенаправляем на страницу подтверждения заказа
        })
        .catch(error => {
          // Обработка ошибки
          console.error('Произошла ошибка!', error);
        });
      }
    });
    // Валидация формы перед отправкой
    function validateForm() {
      const requiredFields = document.querySelectorAll('._req');
      let isValid = true;
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });
      return isValid;
    }

    // Получение данных корзины
    function getCartItems() {
      // Вы должны реализовать эту функцию для получения элементов корзины со страницы
      // Например, вы можете извлечь их из HTML или получить из localStorage
      // Здесь я предполагаю, что у вас есть функция для получения элементов корзины
      const cartItems = JSON.stringify(getCartFromPage());
      return cartItems;
    }
  });

// Функция для извлечения элементов корзины из страницы
function getCartFromPage() {
  const cartItemsContainer = document.querySelector('.cart-items');
  const items = cartItemsContainer.querySelectorAll('.cart-item');

  const cart = [];

  items.forEach(item => {
    const name = item.querySelector('.item__cart-name').textContent;
    const price = parseInt(item.querySelector('.item__cart-price').textContent);
    const quantity = parseInt(item.querySelector('.item__cart-calc span').textContent);
    const id = parseInt(item.querySelector('.remove-button').dataset.id);
    const image = item.querySelector('.cart-item-image img').src;

    cart.push({ id, name, price, quantity, image });
  });

  return cart;
}