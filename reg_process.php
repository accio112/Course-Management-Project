<!DOCTYPE html>
<html>
<head>
	<title>Student Login</title>
	<!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Material Design Bootstrap -->
    <link href="css/mdb.min.css" rel="stylesheet">

	<link href="css/login.css" rel="stylesheet" type="text/css">


</head>
<body >
<div class="view">
<div id="detail" style="
	
	position: relative;	
	border: solid blue 2px;
	width: 40%;
	border-radius:5px;
	margin: 100px auto;
	background: #4682B4;
	padding: 50px;
	
">
<?php
	$id = $_POST['user'];
	$password = $_POST['pass'];
	$age = $_POST['age'];
	$sex = $_POST['sex'];
	$email = $_POST['email'];
	$contact = $_POST['contact'];
	$quota = $_POST['quota'];

	//$s_id = stripcslashes($s_id);
	//$password = stripcslashes($password);
	//$s_id = mysql_real_escape_string($s_id);
	//$password = mysql_real_escape_string($password);

	if(isset($_POST['btn'])){
		session_start();
	$con=mysqli_connect("localhost" , "root" , "");
	mysqli_select_db($con,'finalproject');
	$query="INSERT INTO `userstudent`(`S_id`, `password`, `Age`, `Sex`, `Email`, `Contact`, `Quota`) VALUES ('$id','$password','$age','$sex','$email','$contact','$quota')";
	mysqli_query($con,$query);
	$_SESSION['message'] = "Registered Successfully";
	$_SESSION['user'] = $user;
	header("location:index.php");
	}
  ?>
  </div>
  </body>
</html>