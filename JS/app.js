'use strict';
let name = prompt("Please enter your name:");

const yesNoQ = (arrYesNoQ) => {
    for (let i=0 ;i< arrYesNoQ.length ;i++){
        
        if(arrYesNoQ[i] === "")
        {
            arrYesNoQ[i]="invalid";
        } 
    }
    
     console.log(arrYesNoQ);  
}

function moreQ(){
     let gender = prompt("Please enter your gender:");
     let work = prompt("do you work?");
     let married = prompt("do you married?");
     let sport = prompt("Do you practice sport?");
     let arrYesNoQ =[];
     arrYesNoQ.push(work);
     arrYesNoQ.push(married);
     arrYesNoQ.push(sport);
     yesNoQ(arrYesNoQ);

     let skip = confirm("Do you want to skip the welcome message?");
    if (gender ==='female' && married ==='yes'){
        if(skip === false){
            alert("hello Mrs. " + name);
        } 
    } 
    else if (gender === 'female' && married ==='no' ){
        if(skip === false){
            alert("hello Ms. " + name);
        } 
    }
    else if (gender === 'female' && married ==='' ){
        if(skip === false){
            alert("hello " + name);
        } 
    }
    else if (gender === 'male' ) {
        if(skip === false){
            alert("hello Mr. " + name);
        }
    }else {
        alert("hello " + name);
    } 
}
ageFun();
function ageFun(){
    let age = prompt("Please enter your age:");
    if (age > 0){
        moreQ(); 
    }
    else{
    alert("Please enter your age correctly")
    ageFun();
    }
}

// function yesNoQ (arrYesNoQ) {

//     for (let i=0 ;i< arrYesNoQ.length ;i++){
        
//         if(arrYesNoQ[i] === "")
//         {
//             arrYesNoQ[i]="invalid";
//         } 
//     }
    
//      console.log(arrYesNoQ);
// }



   

