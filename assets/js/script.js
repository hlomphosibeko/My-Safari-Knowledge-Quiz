document.addEventListener("DOMContentLoaded", function() {
    
    let radios = document.querySelectorAll("input[type=radio]");

    for (let btn of radios) {
        btn.addEventListener("click", function() {
        
        let valueKey = this.getAttribute('value');
        let gameType=mySafariQuestions[mylist[0]]['Species']
            
        console.log('The game type is',gameType);
        console.log(`Users choice is',${mySafariQuestions[mylist[0]][valueKey]}`);
        userchoice=mySafariQuestions[mylist[0]][valueKey];