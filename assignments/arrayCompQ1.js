var name = prompt("enter the elememts of arrays: ")
const array = name.split(" ")
const intarray = []
var sum = 0

for(let i=0;i<array.length;i++){
    intarray[i] = parseInt(array[i])
    sum = sum + intarray[i]
}

average = sum/intarray.length
sumDv = document.getElementById("sum")
avgDv = document.getElementById("avg")
avgDv.innerHTML = ("The average is: "+average)
sumDv.innerHTML =("The sum is: "+ sum)
