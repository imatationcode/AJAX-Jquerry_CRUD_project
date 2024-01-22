function displayData (){
    var dataa = true;
    $.ajax({
    url: "displayDataa.php",
    type: "POST",
    data : {
        dispSend : dataa
    },
    success: function (data,success) {

            $('#dataTable').html(data);       
    },

    error: function (error) {
        console.log("AJAX Error:", error);
    }
});

}