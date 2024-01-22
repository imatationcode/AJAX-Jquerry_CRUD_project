<?php
include 'dbConnect.php';

if (isset($_POST['deletesend'])) {
    $id = $_POST['deletesend'];
    $sql = "update empdetails set active=1 WHERE id = $id";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        echo "success";
    } else {
        echo "error: " . mysqli_error($conn);
    }
} else {
    echo "error: Parameter 'deletesend' is not set.";
}

?>