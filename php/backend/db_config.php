<?php
	header('Content-Type: text/html; charset=utf-8');

	$db_name = "nome_do_bd";
	$username = "usuario_do_sgbd";
	$password = "senha_do_sgbd";
	$server_name = "localhost";

	$conn = mysqli_connect($server_name, $username, $password, $db_name) or die("Opps, something went wrong");
?>
