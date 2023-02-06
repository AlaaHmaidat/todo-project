'use strict';
let name = prompt("Please enter your name:");
age();
function age(){
    let age = prompt("Please enter your age:");
    if (age > 0){
        genderMF(); 
    }
    else{
    alert("Please enter your age correctly")
    age();
    }
}

function genderMF(){
    let gender = prompt("Please enter your gender:");
    
    let skip;
    if (gender ==='female'){
        skip = confirm("Do you want to skip the welcome message?");
        if(skip === false){
            alert("hello Ms " + name);
        }
        
    }else if (gender === 'male' ) {
        confirm("Do you want to skip the welcome message?");
        if(skip===false){
            alert("hello Mr " + name);
        }
    }else {
        alert("hello " + name);
    } 
}


   

