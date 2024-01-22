function validateAll() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var dob = document.getElementById('dob').value;
    var designation = document.getElementById('designation').value;
    var password = document.getElementById('password').value;

    if (validateForm(name, email, mobile, gender, dob, designation, password)) {
        addEmp();
    }
}

function validateUpdate() {
    var upname = document.getElementById('upname').value;
    var upemail = document.getElementById('upemail').value;
    var upmobile = document.getElementById('upmobile').value;
    var upgender = document.querySelector('input[name="gender"]:checked');
    var updob = document.getElementById('updob').value;
    var updesignation = document.getElementById('updesignation').value;
    var uppassword = document.getElementById('uppassword').value;
    

    if (validateForm(upname, upemail, upmobile, upgender, updob, updesignation, uppassword)) {
        
        updateDetials(); 
    }
}

    function validateForm(name, email, mobile, gender, dob, designation, password) {
    // Check if any of the fields are empty
    if (!name || !email || !mobile || !gender || !dob || !designation || !password) {
        alert('Please fill in all fields with Data.');
        return false; // Stop further execution if any field is empty
    }

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate mobile number format
    if (!/^\d{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        return false;
    }

    // Validate password length and special character
    if (password.length < 6 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alert('Password should be at least 6 characters long and contain at least one special character.');
        return false;
    }

    return true;
}
