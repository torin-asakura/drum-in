<?php
  require 'settings.php';
  require 'methods.php';

  $data = [];
  $data['cap'] = clean($_POST['cap']);
  $data['name'] = clean($_POST['name']);
  $data['tel'] = clean($_POST['tel']);
  $data['area'] = clean($_POST['area']);

  if (checkEmpty($data) && $data['cap'] == 6) {
    $message = "$subjectOrder \r\nИмя: " . $data['name']
      . "\nТелефон: " . $data['tel']
      . "\nВопрос: " . $data['area'];

    sendMessageToTelegram($token, $chat_id_list, $message);
    sendMessageToMail($to, $subjectOrder, $message);
    echo 'Ваш вопрос принят. Я свяжусь с Вами в ближайшее время';
  } else {
    echo 'Что-то пошло не так. Проверьте правильность введённых данных!';

  }
