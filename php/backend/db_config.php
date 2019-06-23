<?php
	header('Content-Type: text/html; charset=utf-8');

	$db_name = "pokedex";
	$username = "admin";
	$password = "";
	$server_name = "localhost";

	$conn = mysqli_connect($server_name, $username, $password, $db_name) or die("Opps, something went wrong");

	mysqli_set_charset($conn, "utf8");
?>
