$(document).ready(function(){
    $('#menu-btn').click(function(){
        $('.navbar').toggleClass('show');
});

});

$(document).ready(function(){
    $('#search-btn').click(function(){
        $('.search-form').toggleClass('show');
});

});

function myalert(){
alert('You must Register first!')
}

$(document).ready(function() {
    $('#loginButton').click(function() {
        var email = $('#email').val().trim();
        var password = $('#password').val().trim();

        if (email === '' || password === '') {
            alert('Please enter both email and password.');
            return false;
        }
        var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        var userFound = false;
        for (var i = 0; i < registeredUsers.length; i++) {
            if (registeredUsers[i].email === email && registeredUsers[i].password === password) {
                userFound = true;
                break;
            }
        }

        if (userFound) {
            alert('Login successful!');
        } else {
            alert('Invalid email or password. Please try again.');
        }

        return true;
    });
});
