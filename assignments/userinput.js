let input = document.getElementById("user");
//the above code is where the div element from the html page is brought in,
// being the input box
function helloName() {
    nameVal = input.value; //read what the user typed
    console.log(("Hello ")+ nameVal); //send that info to the console
    input.value="" //clear the input bar
}



//exercise 2

let subtotal = document.getElementById("price"); 

function tipCal(){ //function that reads in the value of the user and translates it into an integer
    subtotalInt = subtotal.value;
    subtotalInt = parseInt(subtotalInt);
    tip = subtotalInt * .25; //this part of the function finds what 25% of the subtotal is and adds it to a variable named tip.
    total = subtotalInt + tip;
    console.log(("Tip: "+tip+(" total: ")+total)) //Both the total variable (sub and tip added) and the tip variable 
    // get printed and are viewed by the user
}




let username = document.getElementById("username");
let password = document.getElementById("password");
let results = document.getElementById("results");


function passwordCheck(){ //both values username and password are added together
    usernameVal= username.value;
    passwordVal = password.value;
    if(usernameVal+passwordVal =="UsernamePassword"){ //if those two values concatinated together equals UsernamePassword, they succeeded
        results.innerHTML="Sucess";}
    else{
        results.innerHTML="Failed" // if you get anything but what im looking for, fail. 
    }
}



