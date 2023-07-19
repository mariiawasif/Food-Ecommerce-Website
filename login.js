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
        // var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var password = $('#password').val().trim();


        if (email === '' || password === '') {
            alert('Please enter both email and password.');
            return false;
        }
        var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        var name= registeredUsers[0].name;
        var userFound = false;
        for (var i = 0; i < registeredUsers.length; i++) {
            if (registeredUsers[i].email === email && registeredUsers[i].password === password) {
                userFound = true;
                break;
            }
        }

        if (userFound) {
            var loggedUsers = JSON.parse(localStorage.getItem('loggedUsers')) || [];
            loggedUsers.push({ name: name, email: email, password: password });
            localStorage.setItem('loggedUsers', JSON.stringify(loggedUsers));
            alert('Login successful!');
        } else {
            alert('Invalid email or password. Please try again.');
        }

        window.location.href = 'homepage.html';
        return true;
    });
});
