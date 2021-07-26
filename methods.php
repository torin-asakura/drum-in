<?php
/**
 * @param array $array
 * @return bool
 */
function checkEmpty(array $array)
{
    foreach ($array as $a) {
        if (empty($a)) {
           return false;
        }
        return true;
    }
}

/**
 * @param string $value
 * @return string
 */
function clean(string $value = ""): string
{
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);
    return $value;
}

/**
 * @param $token
 * @param $chat_id_list
 * @param $messageToTelegram
 */
function sendMessageToTelegram($token, $chat_id_list, $messageToTelegram)
{
    for ($i = 0; $i < count($chat_id_list); $i++) {
        file_get_contents('https://api.telegram.org/bot'
            . $token
            . '/sendMessage?chat_id='
            . $chat_id_list[$i]
            . '&text='
            . urlencode($messageToTelegram));
    }
}

/**
 * @param $to
 * @param $subject
 * @param $message
 */
function sendMessageToMail($to, $subject, $message)
{
    $headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
    $headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
    mail($to, $subject, $message, $headers); //отправляет получателю на емайл значения переменных

}
