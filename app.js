function clearError() {
    error = document.getElementsByClassName("formerror");
    for (let item  of error){
        item.innerHTML = "";
    }
}


function setError(id,error) {
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}


function validateForm() {
    var returnvalue = true;
    clearError();

    var name = document.forms["myform"]["fname"].value;
         if(name.length < 5){
             setError("name"," * name is too short *");
             return false;
         }

    var email  = document.forms["myform"]["femail"].value;
         if(email.length < 10){
             setError("email"," * envalid email *");
             return false;
         }

    var number  = document.forms["myform"]["fnum"].value;
         if(number.length != 10){
             setError("contact"," * envalid contact *");
             return false;
         }

    var password  = document.forms["myform"]["fpass"].value;
         if(password.length != 8){
             setError("pass"," * envalid password *");
             return false;
         }

    var cpassword  = document.forms["myform"]["fcpass"].value;
         if(cpassword.length != 8){
             setError("cpass"," * please enter valid password *");
             return false;
         }
    

    
        


         return returnvalue;
}