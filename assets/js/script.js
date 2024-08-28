document.addEventListener("DOMContentLoaded", function() {
    
    let radios = document.querySelectorAll("input[type=radio]");

    for (let btn of radios) {
        btn.addEventListener("click", function() {
        
        let valueKey = this.getAttribute('value');
        let gameType = mySafariQuestions[mylist[0]]['Species']
            
        console.log('The game type is',gameType);
        console.log(`Users choice is',${mySafariQuestions[mylist[0]][valueKey]}`);
        userchoice=mySafariQuestions[mylist[0]][valueKey];
             
    })
}}
)

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

function myCorrectAnswer(animal) {
    for (let obtj of mySafariQuestions) {
        if(obtj['Species'] === animal){
         return obtj['correctAnswer']
        }
         }
}

function myOptionsDisplay(x) {
    document.getElementById("answer-clue").innerHTML =
    `<input type="radio" name="response" value="Answer1" id="Answer1">${mySafariQuestions[x]['Answer1']}
    <input type="radio" name="response" value="Answer2" id="Answer2">${mySafariQuestions[x]['Answer2']}
    <input type="radio" name="response" value="Answer3" id="Answer3">${mySafariQuestions[x]['Answer3']}
    <input type="radio" name="response" value="Answer4" id="Answer4">${mySafariQuestions[x]['Answer4']}`
}

function startGame() {
    let x = Math.abs(6-Math.floor(Math.random()*10));
    document.getElementsByTagName('p')[0].innerText = mySafariQuestions[x]['safariQuestion']
    document.getElementsByClassName("safari-quizAnimals")[0].innerHTML = mySafariQuestions[x]['safariQuizAnimals']

    myOptionsDisplay(x);
}

function myUserAnswer() {
    var radioCollection =document.getElementsByName('response');

    for(i=0;i<radioCollection.length;i++){

        if(radioCollection[i].checked){
            console.log('user checked',radioCollection[i].value);
            return radioCollection[i].value
        }
    }
}


function myCorrectIncrement() {
    return ++correctCounter;
}

function myWrongIncrement() {
    return ++wrongCounter;
}

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