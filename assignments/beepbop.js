// Write a loop that runs 25 times and writes the iterand (current iteration of the loop) out onto the 
// page inside of a div element.

// However,

// When the iterand is divisible by 3, write the word "beep" instead
// When the iterand is divisible by 5, write the word "bop" instead
// When the iterand is divisible by 3 AND 5, write "beepbop" instead

let beep = document.getElementById("beepbop");
beepbop();
function beepbop(){
    iteration=0
    for(i=0;i<25;i++){
    iteration+=1;
    if(iteration%3==0){
        beep.innerHTML = "beep";
        if(iteration%5==0){
            beep.innerHTML = "beepbop";
        }
    }
    if(iteration%5==0){
        beep.innerHTML = "beepbop";
    }
    
    }
    document.appendChild(beep);
}

// let loopButBig = document.getElementById("bigLoop");
// for(i=0;i<1;i++){
//     loopButBig.innerHTML = "1000, 2000, 3000, 4000, 5000";
// }