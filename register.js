
const form=[];
$('#registerButton').click(function(){
    // var name= $('#name').val();
    // var email= $('#email').val();
    // var password= $('#password').val();
    // var contact= $('#contact').val();
    // var address= $('#address').val();
    // data.push(name);
    // data.push(email);
    // data.push(password);
    // data.push(contact);
    // data.push(address);

    const data = { name:  $('#name').val()
                , email:  $('#email').val()
                , password: $('#password').val()
                , contact: $('#contact').val()
                , address: $('#address').val()
   }
   form.push(data);
    
    for(let i=0; i<form.length; i++){
        console.log(form[i]);
    }
});
console.log(form);

