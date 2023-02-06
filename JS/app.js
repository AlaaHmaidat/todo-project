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
        skip = prompt("Do you want to skip the welcome message?");
        if(skip==='no'){
            alert("hello Ms " + name);
        }
        
    }else if (gender === 'male' ) {
        skip = prompt("Do you want to skip the welcome message?");
        if(skip==='no'){
            alert("hello Mr " + name);
        }
    }else {
        alert("hello " + name);
    } 
}


   

