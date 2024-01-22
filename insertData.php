<?php
include 'phpFiles/dbConnect.php';

// Check if the form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get data from the AJAX request
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $gender = $_POST['gender'];
    $dob = $_POST['dob'];
    $designation = $_POST['designation'];
    $password = $_POST['password'];

    // Handle file upload
    $photo = '';
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["image"]["name"]);
        move_uploaded_file($_FILES["image"]["tmp_name"], $target_file);
        $photo = $target_file;
    }

    
    $sql = "INSERT INTO empdetails (Name, Email, Mobile, Gender, date_Of_Birth, designation, Password, photo)
            VALUES ('$name', '$email', '$mobile', '$gender', '$dob', '$designation', '$password', '$photo')";

    if ($conn->query($sql) === TRUE) {
        
        $response = array('status' => 'success', 'message' => 'User added successfully!');
        echo json_encode($response);
    } else {
        
        header('Content-Type: application/json');
        $response = array('status' => 'error', 'message' => 'Error: ' . $conn->error);
        echo json_encode($response);
    }

    
    $conn->close();
}
?>
