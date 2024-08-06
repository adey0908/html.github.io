function validateAge(){
    let x = document.forms["myForm"]["age"].value;
    if (x > 35 || x < 18){
        alert ("Age can only be between 18 and 35");
        return false;
    }
    else if (x == ""){
        alert("Age must be filled out");
        return false;
    }
}

function validateName() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (/^[A-Za-z ]+$/.test(x) == false){
        alert("Name can only contain alphabets and whitespace");
        return false;
    }
}
function validateLocation() {
    let x = document.forms["myForm"]["location"].value;
    if (x == "") {
        alert("Location must be filled out");
        return false;
    }
    else if (/^[A-Za-z ]+$/.test(x) == false){
        alert("Location can only contain alphabets and whitespace");
        return false;
    }
    else if (x != "New Delhi" || x != "Kolkata" || x != "Mumbai" || x != "Bengaluru"){
        alert("Location must be New Delhi, Kolkata, Mumbai or Bengaluru");
        return false;
    }
}
function refresh(){
    document.forms["myForm"].reset();  
}