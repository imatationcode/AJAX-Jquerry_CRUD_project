//update functionss

function getUser(uptId) {
    $('#hidden').val(uptId);
     var upId=uptId;
    $.post("phpFiles/update.php", { uptId: uptId }, function (data, status) {
        var userid = JSON.parse(data);

        $('#upimage').attr('src', '' + userid.photo);
        $('#upname').val(userid.Name);
        $('#upemail').val(userid.Email);
        $('#upmobile').val(userid.Mobile);
        var selectedRadioButton = $("input[name='gender'][id='up" + userid.Gender.toLowerCase() + "']");
        selectedRadioButton.prop('checked', true);

        // $("input[name='gender'][id='up" + userid.Gender.toLowerCase() + "']").prop('checked', true);
        $('#updob').val(userid.date_Of_Birth);
        $('#updesignation').val(userid.Designation);
        $('#uppassword').val(userid.Password);


        $('#updateModal').modal("show");
    });

}
//onclick update fuctions


 function updateDetials(){

    var upimage = $('#upimage').val();
    console.log(upimage);

    var upname = $('#upname').val();    
    var upemail = $('#upemail').val();
    var upmobile = $('#upmobile').val();
    var updob = $('#updob').val();
    var upgender = $("input[name='gender']:checked").val();
    var updesignation = $('#updesignation').val();
    var uppassword = md5($('#uppassword').val());
    var hidden =$('#hidden').val();

    $.post("phpFiles/changeData.php",{
        upimage:upimage,
        upname:upname,
        upemail:upemail,
        upmobile:upmobile,
        upgender:upgender,
        updob:updob,
        updesignation:updesignation,
        uppassword:uppassword,
        hidden:hidden,
    },function(data,status){
        $('#updateModal').modal('hide') ;
        displayData ();
        console.log("in the change data");

    }); 

}
