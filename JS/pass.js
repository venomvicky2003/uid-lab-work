var attempt = 3; 
function validate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if ( email == "srvillam2003@gmail.com" && password == "1234567890"){
    alert ("Login successfully");
    window.location = "success.html"; 
    return false;
}
else{
    attempt --;
    alert("You have left "+attempt+" attempt;");
    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
    }
}
}
