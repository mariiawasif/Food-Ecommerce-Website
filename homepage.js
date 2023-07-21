let btn= document.querySelectorAll('#new-des');
let description= document.querySelectorAll('.add-des');
 
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
        description[i].innerText= "Rs. 2000 : Tax: Rs.200 ";
   })   
}

  
document.addEventListener('DOMContentLoaded', function () {
  var logoutBtn = document.querySelector('.fa-sign-out-alt');
  var navbar = document.querySelector('.navbar');
  var loggedUsers = JSON.parse(localStorage.getItem('loggedUsers')) || [];
  var newLink = document.createElement('a');
  newLink.setAttribute('href', 'login.html');

  if (loggedUsers.length > 0) {
    var username = loggedUsers[0].name;
    newLink.textContent = username;
    navbar.appendChild(newLink);

    logoutBtn.addEventListener('click', function () {
      localStorage.removeItem('loggedUsers');
      newLink.textContent = 'Log In';
      window.location.href = 'login.html';
    });
  } else {
    newLink.textContent = 'Log In';
    navbar.appendChild(newLink);
  }
});

