$(document).ready(function() {
    $('#menu-btn').click(function() {
        $('.navbar').toggleClass('show');
    });

    $('#search-btn').click(function() {
        $('.search-form').toggleClass('show');
    });

    const registeredUsers=[];
    $('#registerButton').click(function() {
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var password = $('#password').val().trim();
        var confirmPassword = $('#confirmPassword').val().trim();
        var contact = $('#contact').val().trim();
        var address = $('#address').val().trim();

        if (email === '' || password === '') {
            alert('Please enter both email and password.');
            return false;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.');
            return false;
        }

        if (password !== confirmPassword) {
            alert('Password and confirm password do not match.');
            return false;
        }

        var alphabetsOnlyRegex = /^[A-Za-z]+$/;
        if (!alphabetsOnlyRegex.test(name)) {
            alert('Name should contain only alphabets.');
            return false;
        }

        var contactRegex = /^\d{11}$/;
        if (!contactRegex.test(contact)) {
            alert('Contact should be an 11-digit numeric phone number.');
            return false;
        }

        alert('Form validated successfully!');

        var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        registeredUsers.push({ name: name, email: email, password: password, contact: contact, address: address });
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        window.location.href = 'login.html';
        return true;

        
    });
});
