let exampleDiv = document.getElementById("example");
let results = document.getElementById("result");
let userInput = document.getElementById("txtInput");
exampleDiv.addEventListener("click",divideSeven);
function divideSeven(){
    if(userInput.value%7==0){
        results.innerHTML = "True! Divisible by 7!";
        userInput.value = "";
    }
    if(userInput.value%7>0){
        results.innerHTML = "False! Not divisible by 7!";
        userInput.value = "";
    }
}

