<?php
include 'dbConnect.php';
//update quarrry

if (isset($_POST['hidden'])) 
    {
     echo ("in the change data");

    $unqid= $_POST['hidden'];
    $name = $_POST['upname'];
    $email = $_POST['upemail'];
    $mobile = $_POST['upmobile'];
    $gender = $_POST['upgender'];
    $dob = $_POST['updob'];
    $des = $_POST['updesignation'];
    $password = $_POST['uppassword'] ;
    
    $sql = "update empdetails set Name= '$name', Email='$email', Mobile='$mobile', Gender='$gender', date_Of_Birth='$dob', designation='$des', Password='$password' where id=$unqid";
    $result = mysqli_query($conn, $sql);

}    

?>