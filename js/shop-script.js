$(window).on('load', function () {
 setTimeout( function ()  {
  $('.preloader').fadeOut('slow');
}, 1000); 
});
// Массив продуктов
let productsData = [
    { id: 1227, name: 'стикерпак «котий домик» а6', price: 160, image: 'img/stickers-122.webp', images: ['img/stickers-122-2.webp', 'img/stickers-122-3.webp', 'img/stickers-122-4.webp'], description: 'размер а6 глянцевая ламинация' },
    { id: 1237, name: 'стикерпак «весенние коты»', price: 220, image: 'img/stickers-123.webp', images: ['img/stickers-123-2.webp', 'img/stickers-123-3.webp', 'img/stickers-123-4.webp'], description: 'котики нарисованы в марте, поэтому весенние 💚✨🌱  рисовала для челленджа "30 котов за месяц" Глянцевая ламинация' },
    { id: 1247, name: 'стикерпак «любимые тюльпаны»', price: 160, image: 'img/stickers-124.webp', images: ['img/stickers-124-2.webp', 'img/stickers-124-3.webp', 'img/stickers-124-4.webp'], description: 'размер а6, виниловая прозрачная плёнка' },
    { id: 102, name: 'стикерпак «букет незабудок»', price: 220, image: 'img/stickers-2.webp', images: ['img/stickers-2-2.webp', 'img/stickers-2-3.webp', 'img/stickers-2-4.webp'], description: 'формат А5 /  матовая пленка с матовой ламинацией / крупные наклейки отлично подойдут для чехла телефона или планшета / Вдохновлён винтажным стилем, полевыми цветами и летом🌿 Нарисовано в Procreate в акварельном стиле ' },
    { id: 103, name: 'стикерпак «нежные ландыши»', price: 160, image: 'img/stickers-3.webp', images: ['img/stickers-3-2.webp', 'img/stickers-3-3.webp', 'img/stickers-3-4.webp'], description: 'весенний дизайн и ландыши🐥🌱 / виниловая плёнка и матовая ламинация / размер а6 / светоустойкивость, влагоустойчивость / плотные и немного текстурные' },
    { id: 104, name: 'стикерпак «Крыски»', price: 160, image: 'img/stickers-4.webp', images: ['img/stickers-4-2.webp', 'img/stickers-4-3.webp', 'img/stickers-4-4.webp'], description: 'виниловая плёнка и матовая ламинация / размер а6 / светоустойкивость, влагоустойчивость / плотные и немного текстурные' },
    { id: 105, name: 'стикерпак «чай с сиренью»', price: 160, image: 'img/stickers-5.webp', images: ['img/stickers-5-2.webp', 'img/stickers-5-3.webp', 'img/stickers-5-4.webp'], description: 'размер а6 / прозрачная виниловая пленка / нарисована акварелью' },
    // { id: 107, name: 'Cтикерпак «сельские скетчи»', price: 120, image: 'img/stickers-7.webp', description: '#' },
    // { id: 108, name: '"Мини пак «домик Элисы»"', price: 100, image: 'img/stickers-8.webp', description: '#' },
    // { id: 110, name: 'стикерпак «осенний уют»', price: 120, image: 'img/stickers-10.webp', description: '#' },
    // { id: 111, name: 'Стикерпак «зарисовки для дневника»', price: 120, image: 'img/stickers-11.webp', description: '#' },
    // { id: 112, name: 'Стикербокс «набор мелочей»', price: 120, image: 'img/stickers-12.webp', description: '#' },
    // { id: 113, name: '«Сюрприз» набор стикеров', price: 180, image: 'img/stickers-13.webp', description: '' },
    { id: 115, name: 'набор наклеек «Букет незабудок»', price: 180, image: 'img/stickers-15.webp', images: ['img/stickers-15-2.webp', 'img/stickers-15-3.webp', 'img/stickers-15-4.webp'], description: '15 наклеек {размер до 3,5 см} / пленка без ламинации / ' },
    { id: 1178, name: 'стикерпак «момент мечты»', price: 160, image: 'img/stickers-17.webp', images: ['img/stickers-17-2.webp', 'img/stickers-17-3.webp', 'img/stickers-17-4.webp'], description: 'формат а6 / виниловая пленка с матовой ламинацией / история про исполнение мечты, Корею и воссоединение друзей' },
    { id: 118, name: 'стикерпак малыш «цветы острова чеджу»', price: 110, image: 'img/stickers-18.webp', images: ['img/stickers-18-2.webp', 'img/stickers-18-3.webp', 'img/stickers-18-4.webp'], description: 'миниатюрный размер а7 / виниловая пленка / символы острова Чеджу - камелия гортензии и мандарины / создано в корейском, немного наивном стиле' },
    { id: 1197, name: 'стикер «сладкие лапки»', price: 70, image: 'img/stickers-119.webp', images: ['img/stickers-119-2.webp', 'img/stickers-119-3.webp', 'img/stickers-119-4.webp'], description: 'сахарная ламинация / размер 4*4' },
    { id: 1207, name: 'стикер «сладкие котики»', price: 70, image: 'img/stickers-120.webp', images: ['img/stickers-120-2.webp', 'img/stickers-120-3.webp', 'img/stickers-120-4.webp'], description: 'сахарная ламинация / размер 4*4' },
    { id: 1217, name: 'наклейка на банковскую карту «котьи лапки»', price: 180, image: 'img/stickers-121.webp', images: ['img/stickers-121-2.webp', 'img/stickers-121-3.webp', 'img/stickers-121-4.webp'], description: 'наклейка по форме банковских карт с вырезкой под чип / с голографическими элементами / инструкцию ищи в картинках' },
    // { id: 101, name: 'стикерпак а5 «энн с зелёных крыш»', price: 220, image: 'img/stickers-1.webp', images: ['img/stickers-1-extra1.webp', 'img/stickers-1-extra2.webp', 'img/stickers-1-extra3.webp'],  description: 'стикерпак Энн🌟🏡 большой размер а5, виниловая матовая пленка'},
    { id: 109, name: 'стикерпак «винтажный гербарий»', price: 120, image: 'img/stickers-9.webp', images: ['img/stickers-9-2.webp', 'img/stickers-9-3.webp', 'img/stickers-9-4.webp'], description: 'матовая УФ пленка с защитой от трения и выгорания / формат 12*12 / размеры наклеек 4-5 см / цветы нарисованы акварелью 🥀' },
    { id: 114, name: 'набор наклеек «лисий»', price: 180, image: 'img/stickers-14.webp', images: ['img/stickers-14-2.webp', 'img/stickers-14-3.webp', 'img/stickers-14.webp'], description: 'Набор наклеек на разном материале🦊✨' },
    { id: 116, name: 'набор наклеек «энн»', price: 180, image: 'img/stickers-16.webp', images: ['img/stickers-16-2.webp', 'img/stickers-16-3.webp', 'img/stickers-16-4.webp'], description: 'Набор бумажных наклеек из коллекции «Энн с зелёных крыш»🏡 / ' },
    { id: 106, name: 'стикерпак «энн с зелёных крыш»', price: 160, image: 'img/stickers-6.webp', images: ['img/stickers-6-2.webp', 'img/stickers-6-3.webp', 'img/stickers-6-4.webp'], description: 'наклейки вдохновлённые любимым сериалом «Энн с зелёных крыш»🌟 / размер а6 / 15 наклеек / виниловая пленка / 2 линии в клетку без реза, тоже можно использовать 🤭 / Нарисовано мной в стиле акварели и цветных карандашей🍂' },
    { id: 3297, name: 'открытка «люблю целую»', price: 100, image: 'img/postcards-329.webp', images: ['img/postcards-329-2.webp', 'img/postcards-329-3.webp', 'img/postcards-329-4.webp'], description: 'размер 10*10, материал - плотный белый картон с приятной текстурой' },
    { id: 3307, name: 'открытка «моё сердечко»', price: 100, image: 'img/postcards-330.webp', images: ['img/postcards-330-2.webp', 'img/postcards-330-3.webp', 'img/postcards-330-4.webp'], description: 'размер 10*10, материал - плотный белый картон с приятной текстурой' },
    { id: 3317, name: 'открытка «чайный котик»', price: 100, image: 'img/postcards-331.webp', images: ['img/postcards-331-2.webp', 'img/postcards-331-3.webp', 'img/postcards-331-4.webp'], description: 'размер 10*10, материал - плотный белый картон с приятной текстурой' },
    { id: 3327, name: 'открытка «букет для тебя»', price: 100, image: 'img/postcards-332.webp', images: ['img/postcards-332-2.webp', 'img/postcards-332-3.webp', 'img/postcards-332-4.webp'], description: 'размер a6, материал - плотный картон с текстурой «лён»' },
    { id: 3337, name: 'закладка «винтажный гербарий»', price: 150, image: 'img/postcards-333.webp', images: ['img/postcards-333-2.webp', 'img/postcards-333-3.webp', 'img/postcards-333-4.webp'], description: 'закладка 13*5.5 с изящной кисточкой. материал - плотный дизайнерский картон с жемчужным отливом и фактурным рисунком «хохлома»' },
    
    { id: 320, name: 'открытка «царица Эсфирь»', price: 100, image: 'img/postcards-1.webp', images: ['img/postcards-1-2.webp', 'img/postcards-1-3.webp', 'img/postcards-1-4.webp'], description: 'Иллюстрация из библейской серии🌷 / размер а6 / дизайнерский картон «лен»' },
    { id: 321, name: 'открытка «песнь песней»', price: 100, image: 'img/postcards-2.webp', images: ['img/postcards-2-2.webp', 'img/postcards-2-3.webp', 'img/postcards-2-4.webp'], description: '«Мой милый принадлежит мне, а я — ему. Он пасёт стадо среди лилий» (Песнь песней Соломона 2:16). / Иллюстрация из библейской серии🍇 Эта история о любви и преданности вдохновила меня на эту милую иллюстрацию. / размер а6' },
    { id: 322, name: 'Открытка «чаепитие в весеннем саду»', price: 90, image: 'img/postcards-3.webp', images: ['img/postcards-3-2.webp', 'img/postcards-3-3.webp', 'img/postcards-3-4.webp'], description: '#' },
    // { id: 23, name: 'постер «весна и ландыши»', price: 100, image: 'img/postcards-4.webp', description: '#' },
    { id: 324, name: 'Открытка «Руфь»', price: 100, image: 'img/postcards-5.webp', images: ['img/postcards-5-2.webp', 'img/postcards-5-3.webp', 'img/postcards-5-4.webp'], description: 'Иллюстрация создана мной в Procreate. Руфь одна из любимых библейских персонажей, пример любви и дружбы❤️ / односторонняя / а6 / текстура лён' },
    { id: 325, name: 'Открытка «в гостях у рукодельницы»', price: 100, image: 'img/postcards-6.webp', images: ['img/postcards-6-2.webp', 'img/postcards-6-3.webp', 'img/postcards-6-4.webp'], description: 'Иллюстрация нарисована мной в Procreate, вдохновлена рукодельницей lecoritsa 🥀🧵🪡 / размер а6 / напечатана на картоне с природной текстурой / односторонняя' },
    { id: 326, name: 'открытка «мамины объятия»', price: 100, image: 'img/postcards-7.webp', images: ['img/postcards-7-2.webp', 'img/postcards-7-3.webp', 'img/postcards-7-4.webp'], description: 'Самое уютное место в мире - мамины объятия 🌷🐥 / дизайнерский плотный картон с текстурой  / размер а6' },
    { id: 3278, name: 'открытка «леди с ландышами»', price: 100, image: 'img/postcards-8.webp', images: ['img/postcards-8-2.webp', 'img/postcards-8-3.webp', 'img/postcards-8-4.webp'], description: 'Открытка в винтажном стиле с милой девушкой🌱🤍🧺 / плотная дизайнерская бумага с текстурной вельвета и молочным оттенком /  размер а6' },
    { id: 328, name: 'мини открытка «крыска солнышко»', price: 90, image: 'img/postcards-9.webp', images: ['img/postcards-9-2.webp', 'img/postcards-9-3.webp', 'img/postcards-9-4.webp'], description: 'Односторонняя мини открыточка с красками☀️🐀🌼 / плотная дизайнерская бумага с текстурой / размер 9*9 / милая надпись / Можно приложить к подарку, или украсить своё пространство 🌱💌' },
    // { id: 29, name: 'Открытка «весенняя полка вдохновения»', price: 90, image: 'img/postcards-10.webp', description: '#' },
    { id: 30, name: 'Открытка «зарисовки в дневнике»', price: 100, image: 'img/postcards-11.webp', images: ['img/postcards-11-2.webp', 'img/postcards-11-3.webp', 'img/postcards-11.webp'], description: 'двухсторонняя с местом для тёплых словечек / размер а6 / дизайнерская бумага «лён» / приятная текстура' },
    { id: 31, name: 'Открытка «наблюдай и вдохновляйся»', price: 100, image: 'img/postcards-12.webp', images: ['img/postcards-12-2.webp', 'img/postcards-12-3.webp', 'img/postcards-12-4.webp'], description: '🍏размер а6 / дизайнерский картон «лён» / приятная текстура / односторонняя, сзади можно написать тёплые словечки / {Кролик позировал вживую а я радостно скетчила эту картину}' },
    { id: 32, name: 'открытка «весна в сердце»', price: 100, image: 'img/postcards-13.webp',  images: ['img/postcards-13-2.webp', 'img/postcards-13-3.webp', 'img/postcards-13-4.webp'], description: 'Тёплая весенняя открытка с ландышами и милыми персонажами💚✨🌱 / мелованный плотный картон / размер а6' },
    { id: 33, name: 'открытка «Друзья»', price: 100, image: 'img/postcards-14.webp', images: ['img/postcards-14-2.webp', 'img/postcards-14-3.webp', 'img/postcards-14-4.webp'], description: '🦊формат а6 /  материал- дизайнерский картон с приятной текстурой акварельной бумаги «фетр» / двухсторонняя печать / красивый оборот с местом для подписи🖌 / По мотивам сериала «Энн с зелёных крыш»' },
    // { id: 34, name: 'открытка «чудо»', price: 100, image: 'img/postcards-15.webp', description: '#' },
    { id: 302, name: 'открытка «все получится»', price: 100, image: 'img/postcards-117.webp', images: ['img/postcards-117-2.webp', 'img/postcards-117-3.webp', 'img/postcards-117-4.webp'], description: 'размер 10*10 / материал - плотный картон с жемчужным сиянием' },
    { id: 303, name: 'открытка «обязательно увидимся»', price: 100, image: 'img/postcards-118.webp', images: ['img/postcards-118-2.webp', 'img/postcards-118-3.webp', 'img/postcards-118-4.webp'], description: 'формат а6 / материал - плотный дизайнерский картон с приятной фактурой / двусторонняя печать, красивый оборот с местом для теплых словечек' },
    { id: 304, name: 'карманный календарик 2024', price: 100, image: 'img/calendar-1.webp', images: ['img/calendar-1-2.webp', 'img/calendar-1-3.webp', 'img/calendar-1-4.webp'], description: 'малыш календарик а7 / скругленные углы / дизайнерский картон с текстурой акварельной бумаги' },
    { id: 305, name: 'открытка подружки', price: 120, image: 'img/postcards-121.webp', images: ['img/postcards-121-2.webp', 'img/postcards-121-3.webp', 'img/postcards-121-4.webp'], description: 'размер 10*10 / скругленные углы / плотный приятный на ощупь картон / вторая сторона с полсанием и местом для пожеланий' },
    { id: 306, name: 'открытка «чаепитие в марте»', price: 100, image: 'img/postcards-119.webp', images: ['img/postcards-119-2.webp', 'img/postcards-119-3.webp', 'img/postcards-119-4.webp'], description: '10*10 / текстура под дерево / На иллюстрации друзья встречают Мишку после спячки с охапкой подснежников, и пьют яблочный чай!☕️ ' },
    { id: 3078, name: 'открытка «октябрь»', price: 100, image: 'img/postcards-120.webp', images: ['img/postcards-120-2.webp', 'img/postcards-120-3.webp', 'img/postcards-120-4.webp'], description: '10*10 малышка на перламутровом бежевом картоне! Доброе напоминание, и милейший домик дополнять подарок или рабочее место💫' },
    // { id: 35, name: 'мини открытка «лисички сестрички»', price: 40, image: 'img/postcards-16.webp', description: '#' },
    // { id: 36, name: 'Закладка «Лисички сестрички»', price: 40, image: 'img/postcards-17.webp', description: '#' },
    // { id: 37, name: 'Закладка «чай с сиренью»', price: 40, image: 'img/postcards-18.webp', description: '#' },
    // { id: 41, name: 'Бокс «мухомор»', price: 1250, image: 'img/sets-1.webp', description: '#' },
    { id: 45, name: 'Секретный конверт а6', price: 400, image: 'img/sets-5.webp',  images: ['img/sets-5-2.webp', 'img/sets-5-3.webp', 'img/sets-5-4.webp'], description: 'секретный конверт в который войдёт: одна из открыток, стикерпак, набор стикеров, закладка или вторая открытка,  6-8 рандомных наклеек моих или других авторов, пару штучек для творчества (может сухоцвет, бумажка для творчества, или немного декоративного скотча) / Наполнение может немного отличаться в зависимости от того что есть в наличии. / ~Могу отправить сразу на адрес друга~ / *🎁 Вы всегда можете попросить меня: написать послание, нарисовать маленький рисунок, добавить милую цитату, подписать имя на конверте.' },
    { id: 48, name: 'конверт «добро пожаловать на Чеджу!»', price: 800, image: 'img/sets-8.webp',  images: ['img/sets-8-2.webp', 'img/sets-8-3.webp', 'img/sets-8-4.webp'], description: 'что входит в конверт? серьги «камелии» / все открытки, закладка и стикеры из серии про Чеджу! / нежная подарочная упаковка в полупрозрачном конверте, с ленточкой / Набор выходит дешевле, чем товары по отдельности+ необычная упаковка в подарок!' },
    { id: 49, name: 'коробочка «добро пожаловать на Чеджу»', price: 1400, image: 'img/sets-9.webp',  images: ['img/sets-9-2.webp', 'img/sets-9-3.webp', 'img/sets-9-4.webp'], description: '🌺лимитированный набор!🌺 3 открытки / закладка с кисточкой / 2 стикерпака а6,а7 / серьги ручной работы «камелия» / вязаная салфеточка с цветочком (диаметр 15см) / подарочная упаковка' },
    { id: 42, name: 'конвертик энн»', price: 500, image: 'img/sets-2.webp', images: ['img/sets-2-2.webp', 'img/sets-2-3.webp', 'img/sets-2-4.webp'], description: 'Набор с коллекцией «Энн с зелёных крыш» 💌 / стикерпак, набор бумажных стикеров, мини открытка ( или другая), двухсторонняя открытка, закладка для книг, дополнительные винтажные наклеечки,  подарочное оформление конверта с сургучной печатью и штампами🕯 / Конвертик можно подписать другу на мини открыточке( как на последнем фото), а так же украшеный конверт будет внутри обычного' },
    { id: 478, name: 'набор для подруги🎀 Конвертик с крысками', price: 450, image: 'img/sets-7.webp',  images: ['img/sets-7-2.webp', 'img/sets-7-3.webp', 'img/sets-7-4.webp'], description: 'идеальный подарочек для подруги или сестры🎀 / Нежная гамма, добрые словечки и милая упаковка🎀 / В набор входят: 2 открытки, стикерпак и наклейка. Подарочный конверт и ленточка~ / онверт упаковывается в почтовый конверт, так что дарить вы будете уже готовый упакованный конвертик💫' },
    { id: 43, name: 'Набор для творчества (милый)', price: 300, image: 'img/sets-3.webp',  images: ['img/sets-3-2.webp', 'img/sets-3-3.webp', 'img/sets-3-4.webp'], description: 'Коллажный наборчик для оформления блокнота📝 Можно брать с собой в поездку, работу или учебу🧷 / Внутри: 5 крупных бумажек, 5 небольших бумажек и надписи,  8-10 небольших наклеек разных текстур и авторов, 2 вида отрезов декоративного скотча ( эти например привезла из Кореи) / наполнение в наборах разное. сохраняю оттенки и стиль🌿' },
    { id: 44, name: 'Мини набор для творчества (винтажный)', price: 300, image: 'img/sets-4.webp',  images: ['img/sets-4-2.webp', 'img/sets-4-3.webp', 'img/sets-4-2.webp'], description: 'для ведения блокнотика часто нужны разные бумажки и наклейки 🏷 Решила собрать мини коллажный набор в пакетике! / В этом наборе: 3 крупные бумажки которые можно порвать, порезать на нужные детали, 8 наклеечек разной текстуры ( моих и не только), 7 бумажек для декора' },
    // { id: 46, name: 'Секретный винтажный набор для творчества', price: 700, image: 'img/sets-6.webp',  images: ['img/sets-6-2@.webp', 'img/sets-6-3@.webp', 'img/sets-6-4@.webp'], description: 'набор для любителей старинный вещичек, винтажа и скапбукинга📝✂️ Собираю каждый набор вручную, вырезаю бумажки, нахожу винтажные тетради, состариваю бумагу и конечно всегда в поиске старых книг и открыток!' },
    { id: 50, name: 'серьги «чернильный гриб»', price: 700, image: 'img/decorating-1.webp', images: ['img/decorating-1-2.webp', 'img/decorating-1-3.webp', 'img/decorating-1-4.webp'], description: 'любимые грибочки из этой серии💔 /  напоминают березы, стиль лесной и при этом минималистичный✨ / Цвет индиго, сине-черный с жемчужными бусинками' },
    { id: 51, name: 'серьги «снежная шапка»', price: 700, image: 'img/decorating-2.webp', images: ['img/decorating-2-2.webp', 'img/decorating-2-3.webp', 'img/decorating-2-4.webp'], description: 'ручная лепка и роспись / покрыты защитой, от воды и солнечных лучей' },
    { id: 52, name: 'серьги «мандариновый мухомор»', price: 700, image: 'img/decorating-3.webp', images: ['img/decorating-3-2.webp', 'img/decorating-3-3.webp', 'img/decorating-3-4.webp'], description: 'грибочки длиннее обычного 4см / очень много деталей на ножке и шапочке / оранжевые оттенки добавляют веселого настроения! / защищены покрытием от воды и солнечных лучей' },
    // { id: 53, name: 'серьги «акварельный гриб»', price: 600, image: 'img/decorating-4.webp', description: 'похожи на мои классические серьги мухоморы, только роспись акварелью+ лепка / полимерная глина, покрыты защитным лаком' },
    { id: 55, name: 'Колье «Замок в сиреневом лесу»', price: 3000, image: 'img/decorating-6.webp', images: ['img/decorating-6-2.webp', 'img/decorating-6-3.webp', 'img/decorating-6-2.webp'], description: 'изящное колье с фиолетовым кварцем, малахитом и другими камешками и стеклянными бусинами🌿 / размер регулируется' },
    { id: 56, name: 'Серьги «голубые поганочки»', price: 500, image: 'img/decorating-7.webp', images: ['img/decorating-7-2.webp', 'img/decorating-7.webp', 'img/decorating-7-2.webp'], description: 'поганочка из полимерной глины голубые полупрозрачные и изящные ✨' },
    { id: 578, name: 'Колье «мотылек и звезды»', price: 1500, image: 'img/decorating-8.webp',  images: ['img/decorating-8-2.webp', 'img/decorating-8-3.webp', 'img/decorating-8-2.webp'], description: 'материалы - натуральные камни, винтажные бусины, кулон с росписью ручной работы / размер регулируется цепочкой' },
    { id: 58, name: 'Брошь «чайник с клубникой»', price: 400, image: 'img/decorating-9.webp', images: ['img/decorating-9-2.webp', 'img/decorating-9-3.webp', 'img/decorating-9-2.webp'], description: 'основа из полимерной глины , ручная роспись / покрытие уф-смолой и металлическое крепление' },
    { id: 54, name: 'Брошь мухомор', price: 400, image: 'img/decorating-5.webp', images: ['img/decorating-5-2.webp', 'img/decorating-5.webp', 'img/decorating-5-2.webp'], description: 'основа из полимерной глины , ручная роспись / покрытие уф-смолой и металлическое крепление' },
    // { id: 59, name: 'Брошь «кружечка с черникой»', price: 400, image: 'img/decorating-10.webp', images: ['img/decorating-10-2.webp', 'img/decorating-10-3.webp', 'img/decorating-10-2.webp'], description: 'основа из полимерной глины , ручная роспись / покрытие уф-смолой и металлическое крепление' },
    { id: 60, name: 'Шопер «черничное лето»', price: 3000, image: 'img/accessories-1.webp', images: ['img/accessories-1-2.webp', 'img/accessories-1-3.webp', 'img/accessories-1-4.webp'], description: 'размер 38 х 29 см , ручки 37 х 5 см / светлый и нежный / создан из плотной мебельной ткани с бежевой подкладкой / вышивка - черника с листиками ручной работы' },
    { id: 617, name: 'Брелочек малыш «Котик в домике»', price: 300, image: 'img/accessories-10-1.webp',  images: ['img/accessories-10-2.webp', 'img/accessories-10-3.webp', 'img/accessories-10-4.webp'], description: 'крохотный брелочек для телефона 2см на ниточке / с защитной пленкой / можно прицепить на сумочку или рюкзак' },
    { id: 627, name: 'Брелок «Весенний Персик»', price: 450, image: 'img/accessories-7-1.webp',  images: ['img/accessories-7-2.webp', 'img/accessories-7-3.webp', 'img/accessories-7-4.webp'], description: 'двусторонний акриловый брелочек с красивым карабином - сердечком / размер 6см' },
    { id: 637, name: 'Брелок «Весенний Кисель»', price: 450, image: 'img/accessories-8-1.webp',  images: ['img/accessories-8-2.webp', 'img/accessories-8-3.webp', 'img/accessories-8-4.webp'], description: 'двусторонний акриловый брелочек с красивым карабином - сердечком / размер 6см' },
    { id: 647, name: 'Брелочек «Пора в школу!»', price: 300, image: 'img/accessories-9-1.webp',  images: ['img/accessories-9-3.webp', 'img/accessories-9-2.webp', 'img/accessories-9-4.webp'], description: 'крохотный брелочек для телефона 3см на ниточке / с защитной пленкой / можно прицепить на сумочку или рюкзак' },
    { id: 657, name: 'Значок «Сладкие лапки Киселька»', price: 220, image: 'img/accessories-5-1.webp',  images: ['img/accessories-5-2.webp', 'img/accessories-5-3.webp', 'img/accessories-5-4.webp'], description: 'металлический значок с булавкой , сахарная ламинация / диаметр 37 мм' },
    { id: 667, name: 'Значок «Домик»', price: 200, image: 'img/accessories-6-1.webp',  images: ['img/accessories-6-2.webp', 'img/accessories-6-3.webp', 'img/accessories-6-4.webp'], description: 'металлический значок с булавкой , глянцевая ламинация / диаметр 37 мм' },
    { id: 677, name: 'Значок «Спящий малыш»', price: 180, image: 'img/accessories-11-1.webp',  images: ['img/accessories-11-2.webp', 'img/accessories-11-3.webp', 'img/accessories-6-3.webp'], description: 'металлический значок с булавкой , глянцевая ламинация / диаметр 25 мм' },
    { id: 687, name: 'Набор значков «Чай с сиренью»', price: 300, image: 'img/accessories-3-1.webp',  images: ['img/accessories-3-2.webp', 'img/accessories-3-3.webp', 'img/accessories-3-4.webp'], description: 'мини набор из серии «Сирень» металлические значки с булавкой , глянцевая ламинация / диаметр 25 мм' },
    { id: 697, name: 'Набор значков «Незабудки»', price: 300, image: 'img/accessories-4-1.webp',  images: ['img/accessories-4-2.webp', 'img/accessories-4-3.webp', 'img/accessories-4-4.webp'], description: 'мини набор из серии «Незабудки» металлические значки с булавкой , глянцевая ламинация / диаметр 25 мм' },
    { id: 6017, name: 'Обложка на паспорт «Весенние котики»', price: 500, image: 'img/accessories-2-1.webp',  images: ['img/accessories-2-2.webp', 'img/accessories-2-3.webp', 'img/accessories-2-4.webp'], description: 'милая обложка для паспорта с котиками / материал - двухслойный пвх с уф-печатью' },
    {id: 380, name:'книжная закладка «мечтай»', price: 110, image: 'img/bookmark-1.webp',  images: ['img/bookmark-1-2.webp', 'img/bookmark-1-3.webp', 'img/bookmark-1-4.webp'], description: 'двусторонняя закладка / материал - плотный картон с фактурой лён / необычный дизайн с кисточкой'}
];


// Функция для создания карточки товара
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');
  card.innerHTML = `
  <img class="product-img" src="${product.image}" alt="${product.name}" data-product-id="${product.id}">
      <h3 class="product-name" data-product-id="${product.id}">${product.name}</h3>
      <p> ${product.price} руб</p>
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

// Функция для создания drawer уведомления
function createDrawer(message) {
  const drawer = document.createElement('div');
  drawer.classList.add('drawer');
  drawer.textContent = message;
  document.body.appendChild(drawer);

  // Удаляем drawer через некоторое время
  setTimeout(() => {
    document.body.removeChild(drawer);
  }, 3000); // Измените время на необходимое вам
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
              // Создаем и отображаем drawer уведомление
             createDrawer('Товар добавлен в корзину');
          }
      }
  }
});

// Отображение карточек товаров при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  filterProductsByLastDigit('7');
});

//////////////////////////////////////////////////////////////


// Получаем кнопку поиска и инпут поиска
const searchButtonMobile = document.getElementById('searchMobile');
const searchInputMobile = document.getElementById('searchInputMobile');
const headerSearchMobile = document.querySelector('.search-mobile');

// Обработчик события ввода текста в инпут поиска
searchInputMobile.addEventListener('input', function (event) {
  const searchText = event.target.value.trim();
  filterProductsByName(searchText);
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

// функция поиска по последнему числу ID
function filterProductsByLastDigit(lastDigit) {
  const filteredProducts = productsData.filter(product => {
    const productId = product.id.toString();
    return productId[productId.length - 1] === lastDigit;
  });
  displayProducts(filteredProducts); // Отображаем отфильтрованные товары
}

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
  filterProductsByLastDigit('7');
});

//////////////////////////////////////////////////////////////

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

  // Отображаем дополнительные изображения товара
  const popupImagesContainer = document.getElementById('popupImagesContainer');
  popupImagesContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых изображений

  // Добавляем основное изображение в контейнер основного изображения
  const mainImgPopup = document.createElement('a');
  mainImgPopup.href = product.image;
  mainImgPopup.classList.add('fancybox'); // Добавляем класс fancybox
  mainImgPopup.dataset.fancybox = `gallery-${product.id}`;

  const mainImg = document.createElement('img');
  mainImg.src = product.image;
  mainImg.alt = 'Основное изображение товара для popup';
  mainImgPopup.appendChild(mainImg);
  popupImagesContainer.appendChild(mainImgPopup);

  // Добавляем каждое изображение в popup
  product.images.forEach((image) => {
    const imgContainer = document.createElement('a');
    imgContainer.href = image;
    imgContainer.classList.add('fancybox'); // Добавляем класс fancybox
    imgContainer.dataset.fancybox = `gallery-${product.id}`;

    const imgPopup = document.createElement('img');
    imgPopup.src = image;
    imgPopup.alt = 'Дополнительное изображение товара для popup';
    imgContainer.appendChild(imgPopup);
    popupImagesContainer.appendChild(imgContainer);
  });

  // Инициализируем FancyBox на всех изображениях
  $('.fancybox').fancybox();

  // Отображаем popup
  popup.style.display = 'block';

  // Добавляем класс для затемнения заднего фона
  document.querySelector('.products').classList.add('popup-open');
}

// Обработчик события нажатия на название товара или картинку для отображения popup
document.getElementById('products').addEventListener('click', function(event) {
  if (event.target.classList.contains('product-name') || event.target.classList.contains('product-img')) {
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
  updateTotalPrice(); // Обновляем итоговую стоимость после добавления товара
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


// Функция для расчета скидки по промокоду
function calculateDiscount(promoCode) {
  // Проверяем, совпадает ли промокод с каким-либо известным значением
  if (promoCode === 'KOTIA10') {
    // Если промокод совпадает, применяем скидку 10% к общей стоимости
    const totalPrice = parseInt(document.getElementById('totalPrice').textContent);
    const discount = totalPrice * 0.1; // 10% от общей стоимости
    return discount;
  } else {
    // Если промокод не совпадает, возвращаем 0 (без скидки)
    return 0;
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const validation = new JustValidate('.form', {
    errorLabelStyle: {
        color: '#ff7979'
    }
});
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

validation
    .addField('.name', [{
            rule: 'minLength',
            value: 6,
            errorMessage: "Вы не ввели имя"
        },
        {
            rule: 'maxLength',
            value: 60,
            errorMessage: "Вы ввели больше чем положено"
        }
    ])
    .addField('.mail', [{
            rule: 'required',
            errorMessage: 'Поле нужно заполнить',
        },
        {
            rule: 'email',
            errorMessage: 'Вы не ввели email',
        }
    ])
    .addField('.tel', [{
        rule: "function",
        validator: function (name, value) {
            const phone = selector.inputmask.unmaskedvalue();
            return phone.length === 10
        },
        errorMessage: 'Вы не ввели телефон',
    }])
  const form = document.getElementById('form');
  const promoCodeInput = document.getElementById('promoCode');

  // Слушатель для обновления итоговой стоимости при изменении промокода
  promoCodeInput.addEventListener('input', function() {
    const promoCodeValue = promoCodeInput.value.trim();
    const totalPrice = parseInt(document.getElementById('totalPrice').textContent);
    let discount = 0;
    let finalPrice = totalPrice;
    const finalPriceElement = document.getElementById('finalPrice');
    const labelFinalPriceElement = document.querySelector('.label__finalPrice');
  
    if (promoCodeValue !== '') {
      discount = calculateDiscount(promoCodeValue);
      finalPrice = totalPrice - discount;
      // Обновляем значение finalPriceElement
    finalPriceElement.textContent = finalPrice + ' руб.';
    finalPriceElement.style.display = 'block';
    labelFinalPriceElement.style.display = 'block';
  } else {
    finalPriceElement.style.display = 'none';
    labelFinalPriceElement.style.display = 'none';
  }
  });

  // Обработчик события отправки формы
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    updateTotalPrice();
    const totalPrice = parseInt(document.getElementById('totalPrice').textContent);
    const finalPrice = parseInt(document.getElementById('finalPrice').textContent); 

    const discount = calculateDiscount(promoCodeInput.value.trim());
    const  finalPriceToSend = totalPrice - discount;

    const formData = new FormData(form);
    formData.append('cartItems', JSON.stringify(getCartFromPage()));
    formData.append('discount', discount);
    formData.append('finalPrice', finalPriceToSend);
    formData.append('promoCode', promoCode);
    formData.append('finalPriceWithDiscount', finalPrice); 

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
      localStorage.clear();
      window.location.href = 'order_confirmation.html';
    })
    .catch(error => {
      console.error('Произошла ошибка!', error);
    });
  });
});

    // Получение данных корзины
    function getCartItems() {
      const cartItems = JSON.stringify(getCartFromPage());
      return cartItems;
    }

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

