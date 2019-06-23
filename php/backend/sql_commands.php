<?php
	include_once("db_config.php");

	function querySql($sqlStatement){
		global $conn;

		$result = $conn->query($sqlStatement);

		if(!$result){
            echo "[]";
		}else{
            $rows = [];
            while($row = $result->fetch_assoc()){
                array_push($rows, $row);
            }

            echo json_encode($rows);
        }
	}
?>
