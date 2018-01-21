<!DOCTYPE html>
<html>
<head>
	<title>Student Login</title>
	<!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">

    <!--
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">

    <link href="assets/css/mdb.min.css" rel="stylesheet">-->

	<link href="css/login.css" rel="stylesheet" type="text/css">
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="http://mymaplist.com/js/vendor/TweenLite.min.js"></script>

	<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="index.php">Online Registration</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Student Login</a></li>
    </ul>
  </div>
</nav>


</head>
	<body >
		<div class="container">
    <div class="row vertical-offset-100">
    	<div class="col-md-4 col-md-offset-4">
    		<div class="panel panel-default">
			  	<div class="panel-heading">
			    	<h3 class="panel-title">Please sign in</h3>
			 	</div>
			  	<div class="panel-body">
			    	<form accept-charset="UTF-8" action="process.php" method="POST">
                    <fieldset>
			    	  	<div class="form-group">
			    		    <input class="form-control" placeholder="User" name="user" type="text" id="user">
			    		</div>
			    		<div class="form-group">
			    			<input class="form-control" placeholder="Password" name="pass" type="password" value="">
			    		</div>
			    		<div class="checkbox">
			    	    	<label>
			    	    		<input name="remember" type="checkbox" value="Remember Me"> Remember Me
			    	    	</label>
			    	    </div>
			    		<input class="btn btn-lg btn-success btn-block" type="submit" value="Login">
			    	</fieldset>
			      	</form>
			    </div>
			</div>
		</div>
	</div>
</div>
	<!--<div class="view" style="">
	<div class="full-bg-img flex-center">
		<div id="frm">
			<form action="process2.php" method="POST">
				<p style="margin-bottom: 10px;display: inline;">
					<label style="color: black;">Instructor ID:</label>
					<input type="text" id="user" name="user">
				</p>
				<br>
				<p style="margin-bottom: 10px;display: inline;">
					<label>Password : </label>
					<input type="password" id="pass" name="pass">
				</p>
				<p style="margin-top: 10px;">
					<input type="submit" id="btn" value="Login">
				</p>
			</form>
		</div>
		</div>
	</div>-->
</body>
</html>