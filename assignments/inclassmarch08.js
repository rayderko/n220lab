// let txtName = document.getElementById("txtName");
// let dvStoryResult = document.getElementById("storyResult");
// function Times3(){
//     let userName = (txtName.value+" "+txtName.value+" "+txtName.value);
//     dvStoryResult.innerHTML = userName;

//     txtName.value="";
// }
// let txtName = document.getElementById("txtName");
// let dvStoryResult = document.getElementById("storyResult");
// function noVowels(){
//     let word = txtName.value;
//     let outcome = "";
//     for(i=0;i<word.length;i++){
//         if(word[i]!="a"){
//             if(word[i]!="e"){
//                 if(word[i]!="i"){ 
//                     if(word[i]!="o"){
//                         if(word[i]!="u"){
//                           outcome+=word[i]  
//                         }}}}
                        
//         }
//     }
//     dvStoryResult.innerHTML = outcome;
    
//     txtName.value="";
// }


let txtName = document.getElementById("txtName");
let dvStoryResult = document.getElementById("storyResult");
function noVowels(){
    let word = txtName.value;
    console.log(word) 
    let outcome = "True";
    for(i=0;i<word.length;i++){
        if(word[i]!="a"){
            if(word[i]!="e"){
                if(word[i]!="i"){ 
                    if(word[i]!="o"){
                        if(word[i]!="u"){
                          outcome ="False"  
                        }}}}
                    
        
        
        
        
                        
                    }
    }
    dvStoryResult.innerHTML = outcome;
    
    txtName.value="";
}