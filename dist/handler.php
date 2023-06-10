<?php header("Content-Type: text/html; charset=utf-8");?>
<?php

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: noreply@domium-mebel.ru \r\n";

$username = $_POST['name'];
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
//  mail@domiumf.ru . Для теста можно использовать mail@domium-mebel.ru
if (mail("mail@domiumf.ru", 
        "Domium-Mebel.ru - сообщение с сайта", 
         "Имя: ".$username."<br> Телефон: ".$phone."<br> Сообщение: ".$message ,
         $headers))
 {
    echo "Сообщение успешно отправлено";
    header("Location: /success.php");
} else {
    echo "При отправке сообщения возникли ошибки";
}

?>

