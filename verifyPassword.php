<?php
include '../config.php'; // Stellen Sie sicher, dass der Pfad korrekt ist

$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
if ($password && $password === PASSWORD_CV) {
    echo json_encode(["authorized" => true]);
} else {
    echo json_encode(["authorized" => false, "message" => "Falsches Passwort"]);
}
?>
