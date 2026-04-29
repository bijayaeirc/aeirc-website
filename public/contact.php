<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path_to_phpmailer/PHPMailer.php';
require 'path_to_phpmailer/SMTP.php';
require 'path_to_phpmailer/Exception.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: text/plain");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $subject = htmlspecialchars($_POST['subject'] ?? 'No Subject');
    $message = htmlspecialchars($_POST['message'] ?? '');

    // SMTP config
    $smtp_host = 'smtp.yourhost.com';
    $smtp_username = 'your@email.com';
    $smtp_password = 'your_app_password';
    $smtp_port = 587;

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = $smtp_host;
        $mail->SMTPAuth = true;
        $mail->Username = $smtp_username;
        $mail->Password = $smtp_password;
        $mail->SMTPSecure = 'tls';
        $mail->Port = $smtp_port;

        $mail->setFrom($smtp_username, 'Website Contact Form');
        $mail->addAddress($smtp_username); // Or another destination email

        $mail->Subject = "New Contact Form: " . $subject;
        $mail->Body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

        if ($mail->send()) {
            echo "Message sent successfully!";
        } else {
            http_response_code(500);
            echo "Message could not be sent.";
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(405);
    echo "Only POST method is allowed.";
}
