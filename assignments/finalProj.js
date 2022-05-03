//The two variables below are where the team selections will go
let eastTeam = document.getElementById("East");
let westTeam = document.getElementById("West");
let results = document.getElementById("Results");
let single = document.getElementById("single");
let full = document.getElementById("full");

//the two variables below will store the team names that are selected and will be called when the simulation is over
// 2+ global variables access and modified in response to user input!
let eastern = "";
let western = "";

let eastWins = 0;
let westWins = 0;
let gamesPlayed = 0;
//Both selection functions paste the name of the team selected into the document
function eastSelection(team){
    eastTeam.innerHTML=team;
    eastern = team;
}
function westSelection(team){
    westTeam.innerHTML=team;
    western = team;
}

//The function that simulates each game. There is a random chance of 50/50 for each team to win
function singleSim(){
    if(Math.random()< 0.5){
        eastWins +=1;
        
    }
    else{
        westWins +=1;
        
    }
    // this line of code updates the page on each teams wins
    //manipulating the document object
    results.innerHTML= ((western)+(" have ")+(westWins)+(" wins and the ")+(eastern)+(" have ")+(eastWins)+(" wins"));

    //The two if statements below make sure the page is updated when a team has achieved 4 wins.
    //They also reset team wins when one reaches 4 in case the user wants to sim the same two teams again or new ones.
   if (eastWins > 3){
       //manipulating the document object
    results.innerHTML=((eastern)+(" win the finals ")+(eastWins)+("-")+(westWins));
    eastWins=0;
    westWins=0;
   }
   if (westWins > 3){
       //manipulating the document object
    results.innerHTML=((western)+(" win the finals ")+(eastWins)+("-")+(westWins));
    eastWins=0;
    westWins=0;

   }
 } 
//The function that simulates each serires completely. There is a random chance of 50/50 for each team to win.
//This function operates much like the single sim above
//this function stops when either team reaches 4 wins or 7 games are played. 
//Once one of the teams reach 4 wins the wins reset like the single sim previously
 function fullSim(){
    let eastWin = 0;
    let westWin = 0;
    let gamesPlay = 0;
    //a loop
     for(gamesPlay++;gamesPlay<8;){
        if(gamesPlay>7){
            break;}
        if(Math.random()< 0.5){
            eastWin +=1;
        }
        else{
            westWin +=1;
        
        }
       if (eastWin > 3){
        eastWin==4;
        //manipulating the document object
        results.innerHTML=((eastern)+(" win the finals ")+(eastWin)+("-")+(westWin));
        break;
    
       }
       if (westWin > 3){
        westWin==4;
        //manipulating the document object
        results.innerHTML=((western)+(" win the finals ")+(eastWin)+("-")+(westWin));
        break;
        
    
       }
     }
    }
