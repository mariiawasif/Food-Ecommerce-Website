let btn= document.querySelectorAll('#new-des');
let description= document.querySelectorAll('.add-des');
 
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
        description[i].innerText= "Rs. 2000 : Tax: Rs.200 ";
   })   
}


