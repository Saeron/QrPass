<?php

require 'connectDB.php';

//$miarray = file_get_contents("php://input", true);
//$datos = json_decode($miarray);


function addLine($datos,$password){

$sql = "insert into passwords (email,pass) values ('$datos->email','$password');";

$conn = connect_db();
$rs = mysqli_query($conn, $sql);
mysqli_close($conn);

}

