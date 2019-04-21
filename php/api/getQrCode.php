<?php
include './phpqrcode/qrlib.php';
require 'generatePass.php';
require 'addPass.php';

$miarray = file_get_contents("php://input", true);
$datos = json_decode($miarray);

$password = genPass();

addLine($datos,$password);

$cadena = $datos->email . " " . $password;

QRcode::png(password_hash($cadena, PASSWORD_DEFAULT));
