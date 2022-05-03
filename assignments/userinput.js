let input = document.getElementById("user");
//the above code is where the div element from the html page is brought in,
//  the first being the input box
function helloName() {
    nameVal = input.value; //read what the user typed
    console.log(("Hello ")+ nameVal); //send that info to the console
    input.value="" //clear the input bar
}

let subtotal = document.getElementById("price");

function tipCal(){
    subtotalInt = subtotal.value;
    subtotalInt = parseInt(subtotalInt);
    tip = subtotalInt * .25;
    total = subtotalInt + tip;
    console.log(("Tip: "+tip+(" total: ")+total))
}
let username = document.getElementById("username");
let password = document.getElementById("password");
let results = document.getElementById("results");


function passwordCheck(){
    usernameVal= username.value;
    passwordVal = password.value;
    if(usernameVal+passwordVal =="UsernamePassword"){
        results.innerHTML="Sucess";}
    else{
        results.innerHTML="Failed"
    }
}



