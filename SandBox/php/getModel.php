<?php
	$host  = "127.0.0.1";
	$pass  = "";//管理者密碼
	$user  = "emagu";
	$db = "sandbox";
	$port = 3306;
	$connect = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
	mysqli_query($connect,"SET CHARACTER SET UTF8");
	$query  = "SELECT * FROM type";
	$result = mysqli_query($connect, $query);
	$data = Array();
	while($row = mysqli_fetch_row($result)){
		$Item = Array();
		$query = "SELECT * FROM model where type = '$row[0]'";
		$res = mysqli_query($connect, $query);
		while($r = mysqli_fetch_assoc($res)){
			array_push($Item,$r);
		}
		$type = Array("type"=>$row[0],"name"=>$row[1],"Data"=>$Item);
		array_push($data,$type);
	}
	echo json_encode($data);
?>