<?php
include 'phpFiles/dbConnect.php';

if (isset($_POST['dispSend'])) {
    $table= '<table class="table">
    <thead>
        <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Gender</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Designation</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
        </tr>
    </thead>';
    $sql = "select * from empdetails where active=0";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        while ($row = mysqli_fetch_assoc($result)) {
            $photo = $row['photo'];
            $id = $row['Id'];
            $name = $row['Name'];
            $email = $row['Email'];
            $mobile = $row['Mobile'];
            $gender = $row['Gender'];
            $dob = $row['date_Of_Birth'];
            $des = $row['Designation'];
            $password = str_repeat('*', strlen($row['Password']));
            $table.= '<tr>
            <td><img src=' . $photo . ' width="100" height="100" alt="Employee Photo"></td>
            <td>' . $name . '</td>
            <td>' . $email . '</td>
            <td>' . $mobile . '</td>
            <td>' . $gender . '</td>
            <td>' . $dob . '</td>
            <td>' . $des . '</td>
            <td>' . $password . '</td> 
            <td>
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            <button class="btn btn-dark text-light my-1 btn-lg" onclick="getUser('.$id.')"><i class="fa-solid fa-user-pen"></i></button>
            <button class="btn btn-danger text-light btn-lg" onclick="DeleteUser('.$id.')"><i class="fa-solid fa-trash"></i></button>
        </td>
        </tr>';
        }
        $table.= '</table>';
        echo $table;
    }
}
$conn->close();
?>



        