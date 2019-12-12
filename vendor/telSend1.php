<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$phone = $_POST['user_phone'];
$spam = $_POST["email"];
$ip_add = $_SERVER['REMOTE_ADDR'];
$token = "XXXXXXXXXXXXXXXXXXXXX";
$chat_id = "-XXXXXXXXXXXXX";
$arr = array(
  'Телефон: ' => $phone,
  'IP адрес: ' => $ip_add
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

 if (isset($spam) && $spam == "") {
  // $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
  // расскомментировать строку выше
  echo "Все работает!<br>";
}

else {
	echo "Не пройдена проверка на спам<br>";
}


if ($sendToTelegram)  {
  echo "Спасибо!<br>Скоро с Вами свяжется наш специалист!";
}

else {
  echo "Это же тестовая версия....";
}

?>