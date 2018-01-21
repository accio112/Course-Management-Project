<!DOCTYPE html>
<html>
<head>
	<title>Student Login</title>
	<!-- Font Awesome -->
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<style>
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

.button2 {background-color: #555555;} /* Blue */
</style>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Online Registration</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="index.php">Home</a></li>
    </ul>
  </div>
</nav>
</head>
<body background="assets/img/abs2.jpeg">
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
<button class="button button2"><a href="index.php">Logout</a></button>
<?php 
	$s_id = $_POST['user'];
	$password = $_POST['pass'];

	//$s_id = stripcslashes($s_id);
	//$password = stripcslashes($password);
	//$s_id = mysql_real_escape_string($s_id);
	//$password = mysql_real_escape_string($password);

	
	$con=mysqli_connect("localhost" , "root" , "");
	mysqli_select_db($con,'finalproject');
	$query="SELECT * FROM userstudent WHERE S_id= '". $s_id . "' AND password = '". $password . "';";
	$result = mysqli_query($con,$query)
		or die("cannot query database".mysqli_error($con));
		//print mysqli_error($con);
	$row = mysqli_fetch_array($result,MYSQLI_BOTH);
	$query1="SELECT * FROM name WHERE S_id= '". $s_id ."';";
	$result1= mysqli_query($con,$query1)
		or die("cannot query database".mysqli_error($con));
	$row2 = mysqli_fetch_array($result1,MYSQLI_BOTH);
	$query2="SELECT * FROM fat_name WHERE s_id= '". $s_id ."';";
	$result2= mysqli_query($con,$query2)
		or die("cannot query database".mysqli_error($con));
	$row3 = mysqli_fetch_array($result2,MYSQLI_BOTH);
 	//echo mysqli_num_rows($result);
	if ($row['S_id']==$s_id && $row['password']==$password) {
		//echo "<h1>Login Success!!! Welcome</h1>".$row['s_id'].$row['Name'];
		echo "<h1>Login Successful!!</h1>";
		echo "<h1>Welcome</h1><br>";
		//echo "<h1>Name: <h1>".$row['Name'];
		echo "<h3>Name: {$row2['F_name']} {$row2['M_name']} {$row2['L_name']}<br>";
		echo "StudentId: {$row['S_id']}<br>";
//		echo "Father's Name: {$row3['F_name']} {$row3['M_name']} {$row3['L_name']}<br>";
		echo "Age: {$row['Age']}<br>";
		echo "Sex: {$row['Sex']}<br>";
		echo "Email: {$row['Email']}</h3>";
		echo "<h3>Gpa:8.2</h3>";
		
	}
	else{
		echo "$row";
		echo "Failed to Login!";
	}

  ?>
  </div>
  </body>
</html>