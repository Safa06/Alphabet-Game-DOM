
function continueGame()
{
// step 1. generate a random alphabet 
const alphabet = getARandomAlphabet();

// step 2. show the randomly generate alphabet in the screen
const showAlphabet = document.getElementById('show-alphabet');
showAlphabet.innerText = alphabet;

//step 3: set bg color of the selected alphabet
setBgColorById(alphabet);

//step 4: now remove the bg color of the alphabet
removeBgColorById(alphabet); 

}

function handleKeyboardButtonPress(event){

    //player jeta press korlo keyboard theke oi alphabet ta
    const playerPressed = event.key;

    //stop the game if you want to quit by 'ESCAPE'
    if(playerPressed === 'Escape'){
            gameOver();
    }

    //get the current showing alphabet in the screen
    const showCurrentAlphabetElement = document.getElementById('show-alphabet');
    const showAlphabetElement = showCurrentAlphabetElement.innerText;
    const showAlpha = showAlphabetElement.toLowerCase();
    console.log(playerPressed,showAlpha);

    //check both alphabet match or not
    if(playerPressed === showAlpha){
        //console.log('you got a point');

        //score update--

        //1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreValue = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreValue);

        const currentScore = getElementValueById('current-score');

        //2.increase the score by 1
        const newScore = currentScore + 1;

        //3. show the updated score
        setElementValueById('current-score',newScore);


        // new vabe game shurur age ager letter tar bg color bad dao.
        removeBgColorById(showAlpha);
        continueGame();
        
    }
    else{
        //console.log('you lost a point!');

        //wrong ans dile life kombe

        //1. get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeValue = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeValue);

        const currentLife = getElementValueById('current-life');

        //2. reduce the life count
        const newLife = currentLife - 1;

        //3. display the updated life count
        setElementValueById('current-life',newLife);
        if(newLife === 0)
        {
            gameOver();
        }
    }

}



// capture keyboard press
document.addEventListener('keyup', handleKeyboardButtonPress);

function play()
{
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('playground');

    //reset life and score newly
    setElementValueById('current-life',5);
    setElementValueById('current-score',0);

    continueGame();
}

function gameOver()
{
    hideElementById('playground');
    showElementById('final-score');
    
    //update final score
    const lastScore = getElementValueById('current-score');
    setElementValueById('last-score', lastScore);

    //clear the last selected alphabet
    removeBgColorById('show-alphabet');


}




// function play()
// {
    //1. hide the home screen. Add hidden in the home portion
    // const homeScreen = document.getElementById('home-screen');
    // //console.log(homeScreen.classList);

    // homeScreen.classList.add('hidden');


    // //2. show the playground
    // const playGround = document.getElementById('playground');
    // //console.log(playGround.classList);

    // playGround.classList.remove('hidden');

//}

// function getARandomAlphabet(){
//     //get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');

//     //get a random index between 0-25 (a-z)
//     //Math.random() 0-1 er moddhe dey,tai pore 25 diye multiply
//     //fraction bad dite Math.round() e dilam

//     const randomAlphabetIndex = Math.round(Math.random()*25);
//     const alphabet = alphabets[randomAlphabetIndex];
//     return alphabet;

// }
