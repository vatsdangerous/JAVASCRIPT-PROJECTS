const questions = [{
    question : "Which is the largest Animal in the world?",
    answers :[
        { text: "Shark", correct: "flase"},
        { text: "Whale", correct: "true"},
        { text: "Giraffe", correct: "flase"},
        { text: "Elephant", correct: "flase"},
    ]
},{
    question : "Which is the smallest Continent in the world?",
    answers :[
        { text: "Australia", correct: "true"},
        { text: "Asia", correct: "flase"},
        { text: "Antarctica", correct: "flase"},
        { text: "Africa", correct: "flase"},
    ]
},{
    question : "Which is the smallest desert in the world?",
    answers :[
        { text: "Kalahari", correct: "flase"},
        { text: "Gobi", correct: "flase"},
        { text: "Antarctica", correct: "true"},
        { text: "Sahara", correct: "flase"},
    ]
},{
    question : "Which is the smallest country in the world?",
    answers :[
        { text: "Vatican City", correct: "true"},
        { text: "Bhutan", correct: "false"},
        { text: "Giraffe", correct: "flase"},
        { text: "Elephant", correct: "flase"},
    ]
},{
    question : "Which is the largest Continent in the world?",
    answers :[
        { text: "Africa", correct: "flase"},
        { text: "Australia", correct: "flase"},
        { text: "America", correct: "flase"},
        { text: "Asia", correct: "true"},
    ]
}
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nxtBtn = document.getElementById("nxt-btn");
let currentQueInd = 0;
let score = 0;
function startQuiz(){
    currentQueInd = 0;
    score = 0;
    nxtBtn.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQueInd];
    let questionNo = currentQueInd+1;
    questionElement.innerHTML= questionNo + ". "+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nxtBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorret = selectedBtn.dataset.correct==="true";
    if(isCorret){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nxtBtn.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nxtBtn.innerHTML= "Play Again..!";
    nxtBtn.style.display = "block";
}
function handleNextButton(){
    currentQueInd++;
    if (currentQueInd<questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}
nxtBtn.addEventListener("click",()=>{
    if (currentQueInd<questions.length) {
        handleNextButton();
    }
})
startQuiz();
