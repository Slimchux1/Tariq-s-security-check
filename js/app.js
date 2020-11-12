var lname = document.getElementById('lname')
var age = document.getElementById('age')
let btn = document.querySelector('.submit');
//let count = document.querySelector('.count');
//let total = document.getElementById('total');
//let allowed = document.querySelector('.allowed');
//let denied = document.querySelector('.denied');
let faceMask = document.getElementById('face-mask');
let name_error = document.getElementById('error_msg');
var text;



allowedVisitor = 0,
deniedVisitor = 0,
total = 0;


var button = btn.addEventListener('click', buttonClick)

function buttonClick(e){
    e.preventDefault()

    //Check if name and age field is empty
    if (lname.value === '' || age.value === '' ){
        error_msg.style.padding = "10px";
     //  alert('Name and age must not be blank')
       error_msg.style.padding = "10px";
       text = "Name and ag cannot be blank"
       error_msg.innerHTML = text;

       //check if age is less than 12
    }else if (age.value < 12 ) {
        total++
        deniedVisitor++
        document.querySelector('.denied').innerHTML = `Denied visitor: ${deniedVisitor}`
        document.getElementById('total').innerHTML = `Total visitor: ${total}`
     //  alert('You must be 12years or older to enter Tariqs mall')
       error_msg.style.padding = "10px";
       text = "You must be 12years or older to enter Tariqs mall"
       error_msg.innerHTML = text;
      
       console.log(total)

       //check if vistor has facemask on
    } else if (faceMask.value != 'YES') {
        total++
        deniedVisitor++
        document.querySelector('.denied').innerHTML = `Denied visitor: ${deniedVisitor}`
        document.getElementById('total').innerHTML = `Total visitor: ${total}`
       // alert(`Hey, ${lname.value} You have been denied entry into Tariqs mall for not putting on your face mask`)
        error_msg.style.padding = "10px";
        text = `Hey, ${lname.value} You have been denied entry into Tariqs mall for not putting on your face mask`
        error_msg.innerHTML = text;
        

        //checks if visitor is with facemask and above 12
    }else {
       // alert(`Hey, ${lname.value} welcome to Tariqs mall`)
        allowedVisitor++
        total++
        document.querySelector('.allowed').innerHTML = `Allowed visitor: ${allowedVisitor}`
        document.getElementById('total').innerHTML = `Total visitor: ${total}`
        error_msg.style.padding = "10px";
        text = `Hey, ${lname.value} welcome to Tariqs mall`
        error_msg.innerHTML = text;
    }

//clear field
    lname.value =  "";
    age.value = "";
    faceMask.value = 'YES'
}
  