 

function addEmp() {
// Get form data using FormData for file uploads
let formData = new FormData($("#addUserForm")[0]);
formData.set("password", md5(formData.get("password")));
// Send data to insert.php using AJAX
$.ajax({
    type: "POST",
    url: "insertData.php",
    data: formData,
    dataType: "json",
    contentType: false,
    processData: false,
    success: function (response) {
        // Handle the response from the server
        console.log(response);
        if (response.status === 'success') {
            alert('User added successfully!');
            $('#exampleModal').modal('hide');
            $('#addUserForm').trigger("reset");
            displayData();
            location.reload();
            
        } else {
            alert('Error: ' + response.message);
        }
        
    },
    error: function (error) {
        console.log("AJAX Error:", error);
    }
});
}