var divBox2 = document.createElement("div");
var divBox2 = document.createElement("div");
divBox2.setAttribute('id','box');
divBox2.style.backgroundColor = "green";
divBox2.style.height = 100 + "px";
divBox2.style.width = 100 + "px";


document.body.appendChild(divBox2);
var boxHeight = divBox2.style.height;
var boxWidth = divBox2.style.width;


document.getElementById('box').onclick = function expandOnClick() {

    boxHeight = parseInt(boxHeight) * 1.1 + "px";
    boxWidth = parseInt(boxWidth) * 1.1 + "px";
   
    divBox2.style.height = boxHeight;
    divBox2.style.width = boxWidth;
    document.body.appendChild(divBox2);
    checkValues();
    };
