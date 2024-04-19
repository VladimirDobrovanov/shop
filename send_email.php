<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $fullname = $_POST['fullname'];
    $city = $_POST['city'];
    $street = $_POST['street'];
    $house = $_POST['house'];
    $apartment = $_POST['apartment'];
    $zip = $_POST['zip'];
    $phone = $_POST['phone'];
  
    // Получаем данные о корзине из Local Storage
    $cartItems = json_decode($_POST['cartItems'], true);
  
    // Формируем содержимое письма
    $to = 'vdobrovanov95@gmail.com';
    $subject = 'Новый заказ от ' . $fullname;
    $message = 'ФИО: ' . $fullname . "\r\n" .
               'Город: ' . $city . "\r\n" .
               'Улица: ' . $street . "\r\n" .
               'Дом: ' . $house . "\r\n";
    if (!empty($apartment)) {
        $message .= 'Квартира: ' . $apartment . "\r\n";
    }
    $message .= 'Индекс: ' . $zip . "\r\n" .
                'Телефон: ' . $phone . "\r\n\r\n" .
                'Содержимое корзины:' . "\r\n";
    foreach ($cartItems as $item) {
        $message .= $item['name'] . ': ' . $item['quantity'] . ' шт.' . "\r\n";
    }
    $message .= "\r\n" . 'Итоговая стоимость: ' . $_POST['totalPrice'] . ' руб.';
  
    $headers = 'From: vdobrovanov95@gmail.com' . "\r\n" .
               'Reply-To: ' . $to . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo 'Данные успешно отправлены.';
    } else {
        echo 'Ошибка при отправке данных.';
    }
}
?>
