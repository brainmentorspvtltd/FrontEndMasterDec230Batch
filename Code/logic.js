function validate(){
    var userid = document.querySelector("#userid").value;
    var pwd = document.querySelector("#pwd").value;
    isBlank(userid,'Userid','usererror');
    doPasswordValidations(pwd);
    //isBlank(pwd,'Password','pwderror');
    console.log("Validate Call ",userid);
}
function doPasswordValidations(str){
     if(!isBlank(str,'Password','pwderror')){
     checkPasswordLength(str);
     }
}
function checkPasswordLength(str){
    if(str.trim().length<8){
        document.querySelector("#pwderror").innerText = "Password Should be 8 Characters";
    }
    else{
          document.querySelector("#pwderror").innerText ="";   
    }
}
function isBlank(str,label,errorId){
if(str.trim().length==0){
    document.querySelector("#"+errorId).innerText = label+" is Blank";
    return true;
        //alert(label+" is Blank");
    }
    else{
       document.querySelector("#"+errorId).innerText=""; 
       return false;
    }
}
