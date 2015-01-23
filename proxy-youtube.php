<?php
header('Content-type: application/json; charset=utf-8');

$url = "http://www.gruponove.com.br/youtube-api/";
$dados = file_get_contents($url);

echo $dados;
?>
