<?php
	$host  = "127.0.0.1";
	$pass  = "";//管理者密碼
	$user  = "emagu";
	$db = "sandbox";
	$port = 3306;
	$connect = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
	mysqli_query($connect,"SET CHARACTER SET UTF8");
	$type = Array();
	$model = Array();
	$tex = Array();
	$query  = "SELECT * FROM type";
	$result = mysqli_query($connect, $query);
	while($row = mysqli_fetch_row($result)){
		array_push($type,$row);
	}
	$query  = "SELECT * FROM model";
	$result = mysqli_query($connect, $query);
	while($row = mysqli_fetch_row($result)){
		array_push($model,$row);
	}
	$query  = "SELECT * FROM tex";
	$result = mysqli_query($connect, $query);
	while($row = mysqli_fetch_row($result)){
		array_push($tex,$row);
	}
	$data = Array("Type" => $type,"Model" => $model,"Tex" => $tex);
	echo json_encode($data);
?>