
let homeString = document.getElementById("homeButton");
homeString.addEventListener("click",home);
let aboutString = document.getElementById("aboutButton");
aboutString.addEventListener("click",about);
let hoursString = document.getElementById("hoursButton");
hoursString.addEventListener("click",hours);
let buttonStrings = ["this is our home page.", "This is our about page.","These are our hours."]
function home(){
    results.innerHTML = "";
    results.innerHTML = buttonStrings[0];
}
function about(){
    results.innerHTML = "";
    results.innerHTML = buttonStrings[1];
}
function hours(){
    results.innerHTML = "";
    results.innerHTML = buttonStrings[2];
}
// let results = document.getElementById("result");
// exampleDiv.addEventListener("click",divideSeven);
// function divideSeven(){
//     if(userInput.value%7==0){
//         results.innerHTML = "True! Divisible by 7!";
//     }
//     if(userInput.value%7>0){
//         results.innerHTML = "False! Not divisible by 7!";
//     }
// }
