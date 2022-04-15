function colorChange(e){
    let answer = document.getElementById("Answer");
    let question = document.getElementById(e.id);
    answer.innerHTML = question.dataset.color;
}