<?php
function genPass()
{
    $cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#!%&()";
    //el simbolo euro no puede incluirse en utf8
    //$cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    $long = strlen($cadena);

    $pass = "";
    $longPass = 40;

    for ($i = 0; $i < $longPass; $i++) {
        $pos=rand(0,$long-1);
        $pass .= substr($cadena,$pos,1);
    }
    return $pass;
}
?>