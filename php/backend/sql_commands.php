<?php
	include_once("dbConfig.php");

	function updateSql($sqlStatement, $sqlDataJson){
		return sqlCommand($sqlStatement, $sqlDataJson, false);
	}

	function querySql($sqlStatement, $sqlDataJson){
		return sqlCommand($sqlStatement, $sqlDataJson, true);
	}

	function multiQuery($sql){
		global $conn;
		$result = $conn->multi_query($sql);

		if (!$result) {
			die('Invalid query: ' . mysqli_error($conn));
		}
	}

	function sqlCommand($sqlStatement, $sqlDataJson, $getResponse){
		$sqlData = json_decode($sqlDataJson, true)[""];

		$numberOfArguments = count($sqlData);

		//Cria uma string com os tipos das variaveis dos parametros para preparar o comando antes
		if($numberOfArguments > 0){
			$paramDataTypes = "";

			for($i = 0; $i < $numberOfArguments; $i++){
				$paramDataTypes .= $sqlData[$i]['type'];
			}
		}
		global $conn;

		// Preparação do comando contra SQL Injection
		$stmt = $conn->prepare($sqlStatement);

		//Sim, é feio mas fazer o que... Não tem outro jeito porque não tem como fazer o bind_param() sem colocar variavel por variavel
		if($numberOfArguments == 1) $stmt->bind_param($paramDataTypes, $sqlData[0]['value']);
		if($numberOfArguments == 2) $stmt->bind_param($paramDataTypes, $sqlData[0]['value'], $sqlData[1]['value']);
		if($numberOfArguments == 3) $stmt->bind_param($paramDataTypes, $sqlData[0]['value'], $sqlData[1]['value'], $sqlData[2]['value']);
		if($numberOfArguments == 4) $stmt->bind_param($paramDataTypes, $sqlData[0]['value'], $sqlData[1]['value'], $sqlData[2]['value'], $sqlData[3]['value']);
		if($numberOfArguments == 5) $stmt->bind_param($paramDataTypes, $sqlData[0]['value'], $sqlData[1]['value'], $sqlData[2]['value'], $sqlData[3]['value'], $sqlData[4]['value']);
		if($numberOfArguments == 6) $stmt->bind_param($paramDataTypes, $sqlData[0]['value'], $sqlData[1]['value'], $sqlData[2]['value'], $sqlData[3]['value'], $sqlData[4]['value'], $sqlData[5]['value']);
		if($numberOfArguments == 7) $stmt->bind_param($paramDataTypes, $sqlData[0]['value'], $sqlData[1]['value'], $sqlData[2]['value'], $sqlData[3]['value'], $sqlData[4]['value'], $sqlData[5]['value'], $sqlData[6]['value']);
		if($numberOfArguments == 8) $stmt->bind_param($paramDataTypes, $sqlData[0]['value'], $sqlData[1]['value'], $sqlData[2]['value'], $sqlData[3]['value'], $sqlData[4]['value'], $sqlData[5]['value'], $sqlData[6]['value'], $sqlData[7]['value']);
		if($numberOfArguments == 9) $stmt->bind_param($paramDataTypes, $sqlData[0]['value'], $sqlData[1]['value'], $sqlData[2]['value'], $sqlData[3]['value'], $sqlData[4]['value'], $sqlData[5]['value'], $sqlData[6]['value'], $sqlData[7]['value'], $sqlData[8]['value']);

		$stmt->execute();

		$stmt->store_result();
		$rowCount = $stmt->num_rows;

		if($getResponse == 1){
			$metadata = $stmt->result_metadata();
			$fields = $metadata->fetch_fields();
			$columnCount = count($fields);

			/*	Tive que fazer ficar feio assim porque eu não achei um jeito de no '$stmt->bind_result()'
				colocar como parametro um vetor por exemplo, ai teve ser ser variavel por variavel :/ 	*/
			if($columnCount == 1){
				$stmt->bind_result($col1);
				while($stmt->fetch()){
					$jsonOutput[] = array($fields[0]->name => $col1);
				}
				return json_encode($jsonOutput);
			}
			else if($columnCount == 2){
				$stmt->bind_result($col1, $col2);
				while($stmt->fetch()){
					$jsonOutput[] = array($fields[0]->name => $col1, $fields[1]->name => $col2);
				}
				return json_encode($jsonOutput);
			}
			else if($columnCount == 3){
				$stmt->bind_result($col1, $col2, $col3);
				while($stmt->fetch()){
					$jsonOutput[] = array($fields[0]->name => $col1, $fields[1]->name => $col2, $fields[2]->name => $col3);
				}
				return json_encode($jsonOutput);
			}
			else if($columnCount == 4){
				$stmt->bind_result($col1, $col2, $col3, $col4);
				while($stmt->fetch()){
					$jsonOutput[] = array($fields[0]->name => $col1, $fields[1]->name => $col2, $fields[2]->name => $col3, $fields[3]->name => $col4);
				}
				return json_encode($jsonOutput);
			}
			else if($columnCount == 5){
				$stmt->bind_result($col1, $col2, $col3, $col4, $col5);
				while($stmt->fetch()){
					$jsonOutput[] = array($fields[0]->name => $col1, $fields[1]->name => $col2, $fields[2]->name => $col3, $fields[3]->name => $col4,
					$fields[4]->name => $col5);
				}
				return json_encode($jsonOutput);
			}
			else if($columnCount == 6){
				$stmt->bind_result($col1, $col2, $col3, $col4, $col5, $col6);
				while($stmt->fetch()){
					$jsonOutput[] = array($fields[0]->name => $col1, $fields[1]->name => $col2, $fields[2]->name => $col3, $fields[3]->name => $col4,
					$fields[4]->name => $col5, $fields[5]->name => $col6);
				}
				return json_encode($jsonOutput);
			}
			else if($columnCount == 7){
				$stmt->bind_result($col1, $col2, $col3, $col4, $col5, $col6, $col7);
				while($stmt->fetch()){
					$jsonOutput[] = array($fields[0]->name => $col1, $fields[1]->name => $col2, $fields[2]->name => $col3, $fields[3]->name => $col4,
					$fields[4]->name => $col5, $fields[5]->name => $col6, $fields[6]->name => $col7);
				}
				return json_encode($jsonOutput);
			}
			else if($columnCount == 8){
				$stmt->bind_result($col1, $col2, $col3, $col4, $col5, $col6, $col7, $col8);
				while($stmt->fetch()){
					$jsonOutput[] = array($fields[0]->name => $col1, $fields[1]->name => $col2, $fields[2]->name => $col3, $fields[3]->name => $col4,
					$fields[4]->name => $col5, $fields[5]->name => $col6, $fields[6]->name => $col7, $fields[7]->name => $col8);
				}
				return json_encode($jsonOutput);
			}
			else if($columnCount == 9){
				$stmt->bind_result($col1, $col2, $col3, $col4, $col5, $col6, $col7, $col8, $col9);
				while($stmt->fetch()){
					$jsonOutput[] = array($fields[0]->name => $col1, $fields[1]->name => $col2, $fields[2]->name => $col3, $fields[3]->name => $col4,
					$fields[4]->name => $col5, $fields[5]->name => $col6, $fields[6]->name => $col7, $fields[7]->name => $col8, $fields[8]->name => $col9);
				}
				return json_encode($jsonOutput);
			}
		}else{
			return $rowCount > 0;
		}

		return false;
	}
?>
