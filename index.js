<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
    $email=$_REQUEST['email'];
    $password=$_POST['pass'];
    $phone=$_POST['passd'];
    $gender=$_POST['aa'];
    

    echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>'.$email.'</strong> You set password is <strong>'.$password.'</strong>
  Number <strong>'.$phone.'</strong> Gender is <strong>'.$gender.'</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>';
}
?>
