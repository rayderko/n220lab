let txtName = document.getElementById("txtName");
function tipTotal(){
    let num = txtName.value; 
    let total = num*1.2;
    let tip = num*.2;
    dvtip.innerHTML = ("Tip: "+tip); 
    dvtotal.innerHTML = ("Total: "+total); 

}