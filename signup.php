<?php
require 'settings.php';
require 'methods.php';

$data = [];
$data['name'] = clean($_POST['name']);
$data['tel'] = clean($_POST['tel']);

$message = "$subjectSingUp  \r\nИмя: " . $data['name']
    . "\nТелефон: " . $data['tel'];

if (checkEmpty($data)) {
    $message = "$subjectSingUp  \r\nИмя: " . $data['name']
        . "\nТелефон: " . $data['tel'];
    sendMessageToTelegram($token, $chat_id_list, $message);
    sendMessageToMail($to, $subjectSingUp, $message);
    echo 'Ваша заявка принята. Я с Вами свяжусь в ближайшее время';
} else {
    echo 'Что-то пошло не так. Проверьте правильнось введенных данных2';
}