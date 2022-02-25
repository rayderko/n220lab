// var divBox2 = document.createElement("div");
// var divBox2 = document.createElement("div");
// divBox2.setAttribute('id','box');
// divBox2.style.backgroundColor = "green";
// divBox2.style.height = 100 + "px";
// divBox2.style.width = 100 + "px";


// document.body.appendChild(divBox2);
// var boxHeight = divBox2.style.height;
// var boxWidth = divBox2.style.width;


// document.getElementById('box').onclick = function expandOnClick() {

//     boxHeight = parseInt(boxHeight) * 1.1 + "px";
//     boxWidth = parseInt(boxWidth) * 1.1 + "px";
   
//     divBox2.style.height = boxHeight;
//     divBox2.style.width = boxWidth;
//     document.body.appendChild(divBox2);
//     checkValues();
//     };

let array1 = [ 1,2, 25, 21,25 ];
let array2 = [ 55, 66, 77, 88, 99 ];
let array3 = [ 55, 66, 77, 88, 99,58,49,39 ];
count20(array1);
count20(array3);
count20(array2);
function count20(a){
    let total=0;
for (i=0;i<a.length;i++){
    if(a[i]>=20){
        total++;
        if(total>3){
            total=-1;
            break;
        }
    }
}
console.log(total);
}