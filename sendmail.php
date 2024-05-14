<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Получение данных из формы
  $name = $_POST['name'];
  $region = $_POST['region'];
  $index = $_POST['index'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $promoCode = $_POST['promoCode'];
  $finalPrice = $_POST['finalPrice'];
  $cartItems = json_decode($_POST['cartItems'], true);

  // Проверка данных формы (можно добавить дополнительную проверку, если нужно)
  if (empty($name) || empty($region) || empty($index) || empty($phone) || empty($email) || empty($cartItems)) {
    http_response_code(400);
    echo "Пожалуйста, заполните все обязательные поля.";
    exit;
  }

  // Отправка письма
  $to = "vdobrovanov95@gmail.com"; // Замените на вашу электронную почту
  $subject = "Новый заказ";
  $headers = "From: shop\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
  
  $mailMessage = "<p>Имя: $name<br>";
  $mailMessage .= "Регион: $region<br>";
  $mailMessage .= "Индекс: $index<br>";
  $mailMessage .= "Телефон: $phone<br>";
  $mailMessage .= "Email: $email<br>";
  $mailMessage .= "Промокод:$promoCode<br>";
  $mailMessage .= "Цена с учетом скидки:$finalPrice<br>";
  $mailMessage .= "Сообщение: $message</p>";
  
  
  // Добавление элементов корзины в сообщение
  $mailMessage .= "<p>Элементы корзины:</p>";
  $totalPrice = 0;
  foreach ($cartItems as $item) {
    $itemName = $item['name'];
    $itemPrice = $item['price'];
    $itemQuantity = $item['quantity'];
    $itemTotal = $itemPrice * $itemQuantity;
    $totalPrice += $itemTotal;
    $mailMessage .= "<p>$itemName - $itemQuantity шт., Цена за шт.: $itemPrice руб., Общая стоимость: $itemTotal руб.</p>";
  }
  $mailMessage .= "<p>Общая стоимость всех товаров: $totalPrice руб.</p>";

  if (mail($to, $subject, $mailMessage, $headers)) {
    echo "Сообщение успешно отправлено!";
  } else {
    http_response_code(500);
    echo "Упс! Что-то пошло не так, и мы не смогли отправить ваше сообщение.";
  }
} else {
  http_response_code(405);
  echo "Метод не разрешен";
}
?>