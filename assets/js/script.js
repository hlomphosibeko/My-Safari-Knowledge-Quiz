/**
 * When the DOMContent is loaded, it will trigger a function.
 * An eventlistener will listen for the radio buttons to be clicked.
 */
document.addEventListener("DOMContentLoaded", function() {
    
    let radios = document.querySelectorAll("input[type=radio]");

    for (let btn of radios) {
        btn.addEventListener("click", function() {
        
        let valueKey = this.getAttribute('value');
        let gameType = mySafariQuestions[mylist[0]]['Species']
            
        console.log('The game type is',gameType);
        console.log(`Users choice is',${mySafariQuestions[mylist[0]][valueKey]}`);
        userchoice=mySafariQuestions[mylist[0]][valueKey];
        
        myCheckAnswer(gameType,userchoice)
    })
}}
)

// The gameType and valueKey will be pushed inside this list
let mylist = []

let mySafariQuestions = [{
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
    Answer1: " it walks",
    Answer2: "it hops",
    Answer3: "it swims",
    Answer4: "it crawls",
    correctAnswer: "it walks",
    Species:"tiger",
}
];

// This function will check if the user's answer matches my answwers
function myCorrectAnswer(animal) {
    for (let obtj of mySafariQuestions) {
        if(obtj['Species'] === animal){
         return obtj['correctAnswer']
        }
         }
}

//This function will overwrite the html code for radio buttons
function myOptionsDisplay() {
    const answerClue = document.getElementById("answer-clue");
    answerClue.innerHTML = "";
    for (let i = 1; i <= 4; i++) {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'response';
        input.value = `Answer${i}`;
        input.id = `answer${i}`;
        input.dataset.type = question[`Answer${i}`];
    }
    
    
    /*`<input type="radio" name="response" value="Answer1" id="Answer1">${mySafariQuestions[x]['Answer1']}
    <input type="radio" name="response" value="Answer2" id="Answer2">${mySafariQuestions[x]['Answer2']}
    <input type="radio" name="response" value="Answer3" id="Answer3">${mySafariQuestions[x]['Answer3']}
    <input type="radio" name="response" value="Answer4" id="Answer4">${mySafariQuestions[x]['Answer4']}`*/
}

/**
 * This function fetches the object inside the mySafariQuestions list and view it randomly
 * on the game, the question, and image matching the question and option answers.
 */
function startGame() {
    let x = Math.abs(6-Math.floor(Math.random()*10));
    document.getElementsByTagName('p')[0].innerText = mySafariQuestions[x]['safariQuestion']
    document.getElementsByClassName("safari-quizAnimals")[0].innerHTML = mySafariQuestions[x]['safariQuizAnimals']

    myOptionsDisplay(x);
    mylist.push(x);
    console.log('we are playing the object number',mylist[0])
}

onload = startGame();

//This function checks the radio buttons selcted
function myUserAnswer() {
    var radioCollection = document.getElementsByName('response');

    for (let i=0; i < radioCollection.length; i++) {

        if (radioCollection[i].checked) {
            console.log('user checked', radioCollection[i].value);
            return radioCollection[i].value
        }
    }
}

let correctCounter = 0
let wrongCounter = 0

//This function increases the correct scoring of the user
function myCorrectIncrement() {
    return ++correctCounter;
}

//This function increases the incorrect scoring for the user
function myWrongIncrement() {
    return ++wrongCounter;
}

//This function checks if the user answer and my answers are the same 
function myCheckAnswer(gt, uc) {
    let calculatedAnswer = myCorrectAnswer(gt)

    if (gt === uc) {
    alert("Well done, you know your animals!")
    document.getElementById("correct").innerHTML = myCorrectIncrement()
    } 
    else {
     alert(`Oops! You chose ${uc} which is incorrect. The correct answer is ${calculatedAnswer}`)
     document.getElementById("wrong").innerHTML = myWrongIncrement()
    }
}