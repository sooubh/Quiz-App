const questions = [
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false },
            { text: "Earth", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Pb", correct: false }
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Tokyo", correct: true },
            { text: "Seoul", correct: false },
            { text: "Beijing", correct: false },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Carbon Dioxide", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water at sea level?",
        answers: [
            { text: "100°C", correct: true },
            { text: "90°C", correct: false },
            { text: "110°C", correct: false },
            { text: "120°C", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Albert Einstein", correct: true },
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Diamond", correct: true },
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "How many continents are there on Earth?",
        answers: [
            { text: "Seven", correct: true },
            { text: "Five", correct: false },
            { text: "Six", correct: false },
            { text: "Eight", correct: false }
        ]
    },
    {
        question: "Which element is necessary for breathing and combustion?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Carbon", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Helium", correct: false }
        ]
    }
];

const questionText = document.querySelector("#question");
const AnswerText = document.querySelector("#ans-button");
const NextBtn = document.querySelector(".next-btn");

let CurrentQuestionIndex = 0;
let score = 0;
function slectanswers(e) {
    const Slecetbtn = e.target;
const iscorrect = Slecetbtn.dataset.correct === "true";
    if (iscorrect) {
        Slecetbtn.classList.add("correct");
        score++;
    }else{
        Slecetbtn.classList.add("incorrect")
    }
    Array.from(AnswerText.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    NextBtn.style.display ="block";
}
function Startquiz() {
    resetState();
    let CurrentQuestionIndex = 0;
    let score = 0;
    NextBtn.innerHTML = "Next"
    showQuestions();   
}
 function showQuestions(){
 let currentQuestion = questions[CurrentQuestionIndex]
let questionNo = CurrentQuestionIndex + 1;
 questionText.innerHTML = questionNo + "." +currentQuestion.question;

 currentQuestion.answers.forEach(answers => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    AnswerText.appendChild(button)  
    if(answers.correct){
        button.dataset.correct = answers.correct;
    }
    button.addEventListener("click", slectanswers)  
 });


 }
 function resetState(){
    NextBtn.style.display = "none"
    while (AnswerText.firstChild) {
        AnswerText.removeChild(AnswerText.firstChild)
        
    }
 }
function showscore() {
    resetState();
    questionText.innerHTML =`You Scored ${score} out of ${questions.length} !`;
    NextBtn.innerHTML = "Play Again"
    NextBtn.style.display = "block"
}
 function handlenextbutton() {
    CurrentQuestionIndex++;
    if (CurrentQuestionIndex < questions.length) {
        showQuestions();
        
    }else{
        showscore();
    }
 }

 NextBtn.addEventListener("click", ()=>{
    if (CurrentQuestionIndex< questions.length) {
        handlenextbutton();
    }else{
        Startquiz();
    }
 })
 Startquiz();
