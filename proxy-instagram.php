<?php
header('Content-type: application/json; charset=utf-8');

$userId = '18398283';
$accessToken = '1953765.78e2a1c.7d71aa3ddf574d2786a545b62362b977';
$url = "https://api.instagram.com/v1/users/".$userId."/media/recent/?access_token=".$accessToken;
$dados = file_get_contents($url);

echo $dados;
?>
