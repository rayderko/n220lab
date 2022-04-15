let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("storyResult");
function noHashtags(){
    let word = txtName.value;
    let outcome = "";
    for(i=0;i<word.length;i++){
        if(word[i]!="#"){
        outcome+=word[i]  
                        
                        
        }
    }
    dvResult.innerHTML = outcome;
    
    txtName.value="";
}