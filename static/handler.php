<?php

$username = $_POST['username'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$username = htmlspecialchars($username);
$phone = htmlspecialchars($phone);
$message = htmlspecialchars($message);

$username = urldecode($username);
$phone = urldecode($phone);
$message = urldecode($message);

$username = trim($username);
$phone = trim($phone);
$message = trim($message);



// mail("на какой адрес отправить", "тема письма", "Сообщение (тело письма)","From: с какого email отправляется письмо \r\n");

if (mail("mail@domiumf.ru", "Сообщение с сайта", "Имя:".$username.". Телефон: ".$phone.".Сообщение: ".$message ,"From: example2@mail.ru \r\n"))
 {
    echo "Сообщение успешно отправлено";
} else {
    echo "При отправке сообщения возникли ошибки";
}

?>

