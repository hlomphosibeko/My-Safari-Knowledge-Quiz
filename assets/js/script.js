/**
 * When the DOMContent is loaded, it will trigger a function.
 * An eventlistener will listen for the radio buttons to be clicked.
 */
document.addEventListener("DOMContentLoaded", function() {
    let currentQuestionIndex = 0;
    let correctCounter = 0;
    let wrongCounter = 0;

    function startGame() {
        if (currentQuestionIndex < mySafariQuestions.length) {
            const currentQuestion = mySafariQuestions[currentQuestionIndex];
            document.querySelector('.safari-question p').textContent = currentQuestion.safariQuestion;
            document.querySelector('.safari-quizAnimals').innerHTML = currentQuestion.safariQuizAnimals;
            myOptionsDisplay(currentQuestion);
        } else {
            endGame();
        }
    }

/**
 * This function will overwrite the html code for radio buttons
 */
    function myOptionsDisplay(question) {
    const answerClue = document.getElementById("answer-clue");
    answerClue.innerHTML = "";
    for (let i = 1; i <= 4; i++) {
        const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'response';
            input.value = `Answer${i}`;
            input.id = `answer${i}`;
            input.dataset.type = question[`Answer${i}`];

        const label = document.createElement('label');
            label.htmlFor = `answer${i}`;
            label.textContent = question[`Answer${i}`];

            answerClue.appendChild(input);
            answerClue.appendChild(label);
    }
}
//This eventlistener will listen when the radio button is clicked.
document.getElementById('answer-clue').addEventListener('change', function(event) {
    if (event.target.type === 'radio') {
        const userChoice = event.target.dataset.type;
        const correctAnswer = mySafariQuestions[currentQuestionIndex].correctAnswer;
        checkAnswer(userChoice, correctAnswer);
    }
    });

/**
 * This function checks if the user answer and my answers are the same 
 */
    function checkAnswer(userChoice, correctAnswer) {
        if (userChoice === correctAnswer) {
            alert("Well done, you know your animals!");
            document.getElementById("correct").textContent = ++correctCounter;
        } else {
            alert(`Oops! You chose ${userChoice} which is not correct, the correct answer is ${correctAnswer}`);
            document.getElementById("wrong").textContent = ++wrongCounter;
        }

        currentQuestionIndex++;
        startGame();
    }  
    
    /**
     * This function will execute when all questions have been answered.
     */
    function endGame() {
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('answer-clue').style.display = 'none';
        document.getElementById('gameover').style.display = 'block';
        document.getElementById('reload-btn').style.display = 'block';
        document.querySelector('.gameover-message').textContent = `You got ${correctCounter} correct and ${wrongCounter} wrong.`;
    }

    document.getElementById('reload-btn').addEventListener('click', function() {
        location.reload();
    })
    startGame();
});

/**
 * An array of objects consisting of keys and values of questions, animal images
 * and answers to the questions.
 */
const mySafariQuestions = [{
    safariQuestion: "What is the name of the below animal?",
    safariQuizAnimals: '<img src="assets/images/bird.jpg">',
    Answer1: "bird",
    Answer2: "tiger",
    Answer3: "frog",
    Answer4: "fish",
    correctAnswer: "bird",
    Species:"bird",
},
{
    safariQuestion: "Where does the below animal live?",
    safariQuizAnimals: '<img src="assets/images/cheetah.jpg">',
    Answer1: "in the ocean",
    Answer2: "at the zoo",
    Answer3: "space",
    Answer4: "in a house",
    correctAnswer: "at the zoo",
    Species:"cheetah",
},
{
    safariQuestion: "What color is the below animal?",
    safariQuizAnimals: '<img src="assets/images/crocodile.jpg">',
    Answer1: "yellow",
    Answer2: "purple",
    Answer3: "brown",
    Answer4: "green",
    correctAnswer: "green",
    Species:"crocodile",
},
{
    safariQuestion: "How many legs does this animal have?",
    safariQuizAnimals: '<img src="assets/images/fish.jpg">',
    Answer1: "2 legs",
    Answer2: "4 legs",
    Answer3: "8 legs",
    Answer4: "no legs",
    correctAnswer: "no legs",
    Species:"fish",
},
{
    safariQuestion: "Does this animal lay eggs?",
    safariQuizAnimals: '<img src="assets/images/frog.jpg">',
    Answer1: "no",
    Answer2: "only in summer",
    Answer3: "no idea",
    Answer4: "yes",
    correctAnswer: "yes",
    Species:"frog",
},
{
    safariQuestion: "Is this animal fast or slow?",
    safariQuizAnimals: '<img src="assets/images/tortoise.jpg">',
    Answer1: "it is slow",
    Answer2: "it is fast",
    Answer3: "it can't move",
    Answer4: "it is fast only when it is hungry",
    correctAnswer: "it is slow",
    Species:"tortoise",
},
{
    safariQuestion: "How does this animal move?",
    safariQuizAnimals: '<img src="assets/images/tiger.jpg">',
    Answer1: "it walks",
    Answer2: "it hops",
    Answer3: "it swims",
    Answer4: "it crawls",
    correctAnswer: "it walks",
    Species:"tiger",
}
];

