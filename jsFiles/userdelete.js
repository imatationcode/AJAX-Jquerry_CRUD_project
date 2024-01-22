function DeleteUser(delId){
    $.ajax({
         url:"phpFiles/delete.php",
         type:'post',
         data:{
            deletesend:delId
         },
         success:function(data,status){
            displayData ();

         }
    })
}
