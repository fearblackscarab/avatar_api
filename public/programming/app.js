const singlePossAnswers=document.querySelectorAll('.single-poss-answers');
const answer=document.querySelector('.answer');


checkAnswers=(item,answer)=>{
    if(toString(item.dataset.poss-answer)==toString(answer.dataset.correct-answer)){
        answer.innerText='correct'
    }else{
        answer.innerText='wrong'
    }
};

singlePossAnswers.forEach(item=>{
    item.addEventListener('click',()=>{
        checkAnswers(item,answer);
    })
});