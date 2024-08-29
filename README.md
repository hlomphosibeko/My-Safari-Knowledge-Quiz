# My-Safari-Knowledge-Quiz

When I think of animals, I think of a Safari or Outback. Animals can entertain people in so many ways. We got the zoo to see them, we read about them on the internet or books to learn more about them. Now would you say you know your animals? Safari Knowledge Quiz is created to test how well children, under the age of 5, know their animals. This game hopes to entertain children when they want to know more about their animals. 

![Responsive screens](README.md%20docs/amiresponsive-screens.png)

## Features 

### Username
- This feature requires a player to add their name before playing.
- A player is however not required to have their name inserted.
- Once a name is inserted, a pop up will apear alerting the user to start playing the game. Please see image below:

![Username](README.md%20docs/username-alert.png)

### Playground
- The playground shows a question and an image.
- A question and image would appear on the playground when game is running.
- I used a white background so the animal images can pop.
- The image's role here is to help the player know which animal is being referred to. Please see below image:

![Playground](README.md%20docs/playground-screen.png)

### Answer Options Area
- This feature is used to restrict a player from giving answers which are not in the game. Some questions have a number of ways to answer, so with the given options, a player will be limited.
- It consists of radio buttons where a player will select the correct answer to win the game. Please see below image:

![Answer options](README.md%20docs/answer-options.png)

### Score Area
- Once the player has has submitted their answer, this feature will then show if the answer is correct or not.
- The correct answer number will increase everytime a player gets correct answers.
- The wrong answer number will also increase everytime a player is wrong.
- At the end of the game, a player will then see how they did. Please see image below:

![score area](README.md%20docs/score-section.png)

### Game Over and Reload Button
- When a user has reached the end of the game, a GAME OVER screen will appear.
- This screen will also show the player's score.
- The reload button appears same time with the GAME OVER screen.
- Once a level has been completed, then the reload button will be clicked to restart the game.

![Game over / Reload](README.md%20docs/gameover-reload-screen.png)

### Features Left to implement
* Add more questions and animal images to the game to make it more interesting.
* Make the username visible when the user is playing again.

## Testing

### Validator Testing

##### HTML
* Errors

    - Four errors were found on HTML.
    - 1. I did not include spaces between attributes. 
      2. Inside the username input element, I put two types of values in one input element.
      3. I did not add the alt attribute inside the img element.
      4. The value of the for attribute should be the same as the ID of the input element. Please see image below:

    ![HTML error messages](README.md%20docs/html-errors.png)

    - After carefully reviewing the HTML code, there appears to be no more errors. Please see screenprint below:

    ![Error free HTML code](README.md%20docs/html-error-free.png)

##### CSS
   - There appears to be no errors with CSS code. Please see below screen print:
    ![CSS without errors](README.md%20docs/css-no-errors.png)

##### JavaScript
   - No errors were detected on the JavaScript code, only warnings. Please see below screenprints:

   ![JavaScript warnings](README.md%20docs/js-warnings.png)    

## Deployment
* This site was deployed to GitHub pages. The steps are as follows:
    - In the GitHub repository, navigate to the Settings tab
    - Under General section, select Pages
    - From the source section, click drop down to select Deploy from branch 
    - Under Branch, select main, file/root and save  
    - Once the save button is clicked, wait a couple of minutes to refresh the page
    - After refreshing, the code page will appear and show that deployment was successful.

The live link can be found here - https://hlomphosibeko.github.io/Safari-Knowledge-Quiz/

## Credits
### Content
* The JS code used to group the questions, quesion images and answers is taken from [YouTube](https://www.youtube.com/channel/UCEsOe19aGFcM31zLG2M2sXw)
* A tutor, Roman, advised that I don't replace radio button elements, but change values in the radio buttons.
* Tom, a tutor, helped with overlapping images.
* Roman, a tutor, helped with the looping of the game.
* Sean, a tutor, help with the error referring to an undefined variable which was interrupting the flow of the game. 
* To position my playground, I used a code from Love Maths.


### Media
* The images used on this game are taken from [Freepik](https://www.freepik.com/free-photos-vectors/safari-animals/)
* The thumb emoji used at the top of the game is taken from [Emojipedia](https://emojipeadia.org/thums-up)