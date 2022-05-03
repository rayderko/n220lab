// Make a program with a div that displays the number 1000 in it. 
// Every time the div is clicked, change the number in the div to be 10% less than before.
let multiplied = document.getElementById("newNum"); //connect the div to the javascript. Allows it to be manipulated
dvNum = 1000; //this is the number displayed to the user. 
//You could load in the number from the div but since the number 1000 doesnt change, i made it a variable from the start.


function percent(){ //this function reads in dvNum, 1000, and multiplies it by 0.9. this gives a 10% less number everytime
    dvNum = (dvNum * .9);
    multiplied.innerHTML=dvNum //this prints the results from each click back onto the page
}