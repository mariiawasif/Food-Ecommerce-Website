let btn= document.querySelectorAll('#new-des');
let description= document.querySelectorAll('.add-des');
 
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
        description[i].innerText= "Rs. 2000 : Tax: Rs.200 ";
   })   
}


var navbar = document.querySelector('.navbar');
var loggedUsers = JSON.parse(localStorage.getItem('loggedUsers')) || [];
if (loggedUsers.length > 0) {
  var username = loggedUsers[0].name;
  var newLink = document.createElement('a');
  newLink.setAttribute('href', '#');
  newLink.textContent = "logged in as "+username;
  navbar.appendChild(newLink);
} else {
  var newLink = document.createElement('a');
  newLink.setAttribute('href', 'login.html');
  newLink.textContent = 'Log In';
  navbar.appendChild(newLink);
}

var logoutBtn = document.querySelector('.fa-sign-out-alt');
logoutBtn.addEventListener('click', function () {
  localStorage.removeItem('loggedUsers');
  newLink.textContent = 'Log In';
  window.location.href='login.html';
});

  
