// Using an array with the values: "cars", "bikes", "vans", "trucks", and "velocipedes":
// Write a program that uses a loop that loops through all but the first entry in the array and 
// writes the words out to the document, either in one div or separate divs.

finalArray = ["cars", "bikes", "vans", "trucks", "velocipedes"]; //create the array
let results = document.getElementById("finalArray"); //connect the div to the javascript. Allows it to be manipulated
outcome = "";//this is the variable that will hold the contents of the array given to it from  the loop

for(i=1;i<finalArray.length;i++){ //for loop that starts at the array position [1] because we want to skip the first one, the one at [0]
    outcome += (finalArray[i]+" ") //loading each result from the loop into the outcome variable, not replacing what was previously entered.
    
}
results.innerHTML=outcome; //display the results to the div mentioned earlier (results)

