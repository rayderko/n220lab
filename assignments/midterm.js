let arrayDiv = document.getElementById("line1");
// arrayDiv.innerHTML = 
let oddArray =["up", "up", "down", "down", "down", "left", "right", "left", "right", "a", "b", "start"];
displayArray();
function displayArray(){
    wordDiv="";
for(i=0;i<oddArray.length;i++){
    wordDiv=(wordDiv+oddArray[i]);
    wordDiv=(wordDiv+"-");
    
}
arrayDiv.innerHTML=wordDiv;
}

let clickDiv = document.getElementById("line2");
clickDivArray=["yes","no"];
let counter=0;
onclick = changeDiv() 
function changeDiv(){
    if(counter%2==0){
        variab=clickDivArray[0];
    }
    else{
        variab=clickDivArray[1];
    }
    counter++;
    clickDiv.innerHTML=variab;
}

