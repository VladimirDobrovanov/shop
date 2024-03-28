// burger
document.getElementById('burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
  });

// Массив продуктов
// Данные о товарах



let productsData = [
    { id: 1, name: 'Стикерпак А5 «Энн с зелёных крыш»', price: 250, image: 'img/stickers-1.jpg', description: 'Описание товара 1' },
    { id: 2, name: 'Cтикерпак «букет незабудок»', price: 200, image: 'img/stickers-2.jpg', description: 'Описание товара 2' },
    { id: 3, name: 'Стикерпак «нежные ландыши»', price: 200, image: 'img/stickers-3.jpg', description: 'Описание товара 3' },
    { id: 4, name: 'Cтикерпак «Крыски»', price: 190, image: 'img/stickers-4.jpg', description: 'Описание товара 4' },
    { id: 5, name: 'Стикерпак «чай с сиренью»', price: 150, image: 'img/stickers-5.jpg', description: 'Описание товара 5' },
    { id: 6, name: 'Cтикерпак «Энн с зелёных крыш»', price: 200, image: 'img/stickers-6.jpg', description: 'Описание товара 6' },
    { id: 7, name: 'Cтикерпак «сельские скетчи»', price: 120, image: 'img/stickers-7.jpg', description: '#' },
    { id: 8, name: '"Мини пак «домик Элисы»"', price: 100, image: 'img/stickers-8.jpg', description: '#' },
    { id: 9, name: 'стикерпак «винтажный гербарий»', price: 100, image: 'img/stickers-9.jpg', description: '#' },
    { id: 10, name: 'стикерпак «осенний уют»', price: 120, image: 'img/stickers-10.jpg', description: '#' },
    { id: 11, name: 'Стикерпак «зарисовки для дневника»', price: 120, image: 'img/stickers-11.jpg', description: '#' },
    { id: 12, name: 'Стикербокс «набор мелочей»', price: 120, image: 'img/stickers-12.jpg', description: '#' },
    { id: 13, name: '«Сюрприз» набор стикеров', price: 120, image: 'img/stickers-13.jpg', description: '#' },
    { id: 14, name: 'Стикербокс «Лисий»', price: 120, image: 'img/stickers-14.jpg', description: '#' },
    { id: 15, name: 'Набор наклеек «Букет незабудок»', price: 120, image: 'img/stickers-15.jpg', description: '#' },
    { id: 16, name: 'Стикербокс «Энн»', price: 120, image: 'img/stickers-16.jpg', description: '#' },
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
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Цена: ${product.price} руб</p>
    <button class="btn-reset buy-button">Добавить в корзину</button>
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

// Отображение карточек товаров при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  displayProducts(productsData);
});

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