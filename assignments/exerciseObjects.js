// let objTV = {
//     background: "white",
//     posX: 100,
//     posY: 200,
//     tvHeight: 400,
//     tvWidth: 200,
//     tvBorder: 15,
//     screenColor: "blue",
//     borderColor: "black",
//     antennaPosX: 310,
//     antennaPosY: 200,
//     antennaHeight: 450,
//     antennaWidth: 50,
//     antennaStroke: 3,

// }
// let ballCord ={

//     x : 700,
//     y : 450,
//     xVel : 10,
//     yVel : 10,
//     color : "yellow"


// };
// let objMouseBall ={

//     x : 600,
//     y : 100,
//     size : 25,
//     color : "green",
//     offsetX : 0,    

// }

// function setup(){
//     createCanvas(800,600);
// }


// function draw(){
//     background("white");
//     drawTV(objTV);
//     movingBall(ballCord);

//     fill("yellow");
//     circle(ballCord.x,ballCord.y,25);

    
//     fill(objMouseBall.color);
//     circle(objMouseBall.x,objMouseBall.y+objMouseBall.offsetX,objMouseBall.size);


// }



// function drawTV(a){
//     strokeWeight(a.tvBorder);
//     fill(a.screenColor);
//     rect(a.posX, a.posY,a.tvHeight,a.tvWidth);
//     strokeWeight(a.antennaStroke);
//     line(a.antennaPosX,a.antennaPosY,a.antennaHeight,a.antennaWidth);
// }
// function movingBall(){


//     ballCord.x = ballCord.x+ballCord.xVel;
//     ballCord.y = ballCord.y+ballCord.yVel;

//     if (ballCord.x < 0){
//         ballCord.xVel = ballCord.xVel * -1;
//     }
//     if (ballCord.x > 800){
//         ballCord.xVel = ballCord.xVel * -1;
//     }
//     if (ballCord.y < 0){
//         ballCord.yVel = ballCord.yVel * -1;
//     }
//     if (ballCord.y > 600){
//         ballCord.yVel = ballCord.yVel * -1;
//     }
            
        
// }

// function mousePressed() {
//     if(objMouseBall.posY < 25){
//         if (mouseY > 300) {
//             objMouseBall.offsetX -= 10;
//             objMouseBall.posY += objMouseBall.offsetX;}
//             else{
//                 objMouseBall.offsetX += 10;
//                 objMouseBall.posY += objMouseBall.offsetX;};
//         objMouseBall.offsetX = 0;
//         objMouseBall.posY = 25;
//     }
//     if(objMouseBall.posY > 570){
//         if (mouseY > 300) {
//             objMouseBall.offsetX -= 10;
//             objMouseBall.posY += objMouseBall.offsetX;}
//             else{
//                 objMouseBall.offsetX += 10;
//                 objMouseBall.posY += objMouseBall.offsetX;};
//         objMouseBall.offsetX = 570;
//         objMouseBall.posY = 570;
//     }
    
//   }
// let i = 0;
// let favoray =["pizza", "wings", "star wars", "coffee", "legos"];
// for(i=1;i<11;i++){
//     console.log(i)
// }
// for(i=10;i>0;i--){
//     console.log(i)
// }

// // - Write a loop that prints to the console the first 20 numbers of the Fibonacci sequence ( starting at zero, 
// //     the next number in the sequence is the sum of the previous two numbers: 0, 1, 1, 2, 3, 5, 8, 13.... and so on 

// for(i=1;i<21;i++){
//     fibonacci = 0
//     fibonacci += 1

// }

// - Given the array: let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ],
//  write a loop that reverses the array. Log the reversed array out to the console

// let words = [ "Indiana ", "University ", "Purdue ", "University ", "Indianapolis " ];
// let wordsbackwards = [];
// for(i=4;i>-1;i--){
//     wordsbackwards += words[i];

// }
// console.log(wordsbackwards)

// let array1 = [ 1,2, 25, 21 ];
// let array2 = [ 55, 66, 77, 88, 99 ];


// function count20(a){
// for (i=0;i>length.a;i++){
//     console.log(a[i]);
// }

// }

// count20(array1);




