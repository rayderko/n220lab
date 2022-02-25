// function checkValues() {
// console.log(boxHeight);
// console.log(boxWidth);
// console.log(divBox2.getAttribute('id'));
// }

var divBox = document.createElement("div");
divBox.setAttribute('id','box');
//Set the div elements height, width, and color
divBox.style.height = 100 + "px";
divBox.style.width = 100 + "px";
divBox.style.backgroundColor = "blue";
//Add the div element to the page
document.body.appendChild(divBox);
//change the background to black
document.getElementById('box').onmouseover = function turnBlack() {
    box.style.backgroundColor = "black";
}
//Make the background blue again
document.getElementById('box').onmouseout = function turnBlue() {
    box.style.backgroundColor = "blue";
}

// // Create a square in the middle of the page. Create an array of 4 random colors. Have the square cycle 
// // through the colors at a slower frame rate. 
