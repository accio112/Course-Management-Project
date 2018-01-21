<!DOCTYPE html>
<html lang="en">
    <head> 
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css">

        <!-- Website CSS style -->
        <link rel="stylesheet" type="text/css" href="assets/css/main.css">

        <!-- Website Font style -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
        
        <!-- Google Fonts -->
        <link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>

        <title>Register</title>
            <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="index.php">Online Registration</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Instructor Login</a></li>
    </ul>
  </div>
</nav>

    </head>
    <body background="assets/img/abs2.jpeg">
        <div class="container">
            <div class="row main">
                <div class="panel-heading">
                   <div class="panel-title text-center">
                        <h1 class="title">Student</h1>
                        <hr/>
                    </div>
                    <br>
                </div> 
                <br>
                <div class="main-login main-center">
                    <form class="form-horizontal" method="post" action="reg_process.php">
                        <h1 class="title">&nbsp Registration</h1>
                        <div class="form-group">
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    Your name&nbsp&nbsp<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" name="name" id="name"  placeholder="Enter your Name"/>
                                </div><br>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    Your email&nbsp&nbsp<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email"/><br>
                                </div><br>
                            </div>
                        </div>

                        <div class="form-group">
                            
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <br>
                                    Student ID&nbsp&nbsp<span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" name="user" id="user"  placeholder="Enter your Student ID"/><br>
                                </div><br>
                            </div>
                        </div>

                        <div class="form-group">
                            
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    Password&nbsp&nbsp&nbsp&nbsp<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                    <input type="password" class="form-control" name="pass" id="pass"  placeholder="Enter your Password"/><br>
                                </div><br>
                            </div>
                        </div>

                        <div class="form-group">
                            
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    Your age&nbsp&nbsp&nbsp&nbsp<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" name="age" id="age"  placeholder="Enter your age"/><br>
                                </div><br>
                            </div>
                        </div>

                        <div class="form-group">
                            
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    Your sex&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" name="sex" id="sex"  placeholder="Enter your sex"/><br>
                                </div><br>
                            </div>
                        </div>

                       
                        <div class="form-group">
                            
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    Contact&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" name="contact" id="contact"  placeholder="Enter your contact number"/><br>
                                </div><br>
                            </div>
                        </div>

                        <div class="form-group">
                           
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    Quota&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" name="quota" id="quota"  placeholder="Quota"/>
                                </div>
                            </div>
                        </div>

                        <div class="form-group ">
                           <input type="submit" class="btn btn-success" id="btn" name="btn" value="Register"> </input>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <script type="text/javascript" src="assets/js/bootstrap.js"></script>
    </body>
</html>
<!--<!DOCTYPE html>
<html>
<head>
    <title>Registration</title>
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">

    
    <link href="css/bootstrap.min.css" rel="stylesheet">

    
    <link href="css/mdb.min.css" rel="stylesheet">

    <link href="css/login.css" rel="stylesheet" type="text/css">


</head>
    <body >
    <div class="view" style="">
    <div class="full-bg-img flex-center">
        <div id="frm">
            <form action="reg_process.php" method="POST">
                <p style="margin-bottom: 10px;display: inline;">
                    <label>Student ID:</label>
                    <input type="text" id="user" name="user">
                </p>

                <p style="margin-bottom: 10px;display: inline;">
                    <label>Password : </label>
                    <input type="password" id="pass" name="pass">
                </p>
                <p style="margin-bottom: 10px;display: inline;">
                    <label>Age</label>
                    <input type="text" id="age" name="age">
                </p>
                <p style="margin-bottom: 10px;display: inline;">
                    <label>Sex</label>
                    <input type="text" id="sex" name="sex">
                </p>
                <p style="margin-bottom: 10px;display: inline;">
                    <label>Email</label>
                    <input type="text" id="email" name="email">
                </p>
                <p style="margin-bottom: 10px;display: inline;">
                    <label>Contact</label>
                    <input type="text" id="contact" name="contact">
                </p>
                <p style="margin-bottom: 10px;display: inline;">
                    <label>Quota</label>
                    <input type="text" id="quota" name="quota">
                </p>

                <p style="margin-top: 10px;">
                    <input type="submit" id="btn" name="btn" value="Register">
                </p>
            </form>
        </div>
        </div>
    </div>
</body>
</html>-->