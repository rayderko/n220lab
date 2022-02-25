// Create an array with 3 "best times" (numbers). Write the array so the times in order, from lowest to highest.
// Then, write the line of code that displays the runner-up times (second and third place) in two different divs.

let runner = document.getElementById("runnerup");
let runner2 = document.getElementById("runnerup2");
let numbers = [2,8,10,12,1230]
runnerup();
function runnerup(){
    runner.innerHTML = numbers[1];
    runner2.innerHTML = numbers[2];
}