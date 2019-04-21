<?php

require 'connectDB.php';

$miarray = file_get_contents("php://input", true);
$datos = json_decode($miarray);
$acepted = false;

$sql = "select * from passwords where email='$datos->email';";
$conn = connect_db();
$rs = mysqli_query($conn, $sql);
$long = $rs->num_rows;

for ($i = 0; $i < $long; $i++) {
    $fila = mysqli_fetch_assoc($rs);
    $cadena = $datos->email . " " . $fila['pass'];
    if (password_verify($cadena, $datos->hash)) {
        $acepted = true;
        $id=$fila['id'];
        $sql="update passwords set fecha = current_timestamp where id='$id';";
        $rst= mysqli_query($conn,$sql);
    }
}
if ($acepted) {
    echo '{
        "success": true,
        "message": ' . '"' . 'Welcome ' . $datos->email . '"' . '
        }';
} else {
    echo '{
        "success": false,
        "message": "Who are you?"
        }';
}

?>