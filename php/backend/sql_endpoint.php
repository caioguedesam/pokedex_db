<?php
  require_once 'sql_commands.php';

  // Recebe o comando SQL tanto por GET, POST ou body
  if(isset($_REQUEST["sql"])){
    $sql_command = $_REQUEST["sql"];
  }else if(null !== file_get_contents('php://input') && !empty(file_get_contents('php://input'))){
    $sql_command = file_get_contents('php://input');
  }else{
    echo "{}";
    exit();
  }

  $json_output = querySql($sql_command, '{\"\":[]}');
  echo $json_output;
?>
