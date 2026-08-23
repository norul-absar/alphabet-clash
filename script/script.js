// function play(){
//     // console.log('start play')
//     // Step 1: hide home

//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')
//     // Step 2: Show play ground

//     const playGroundsection =document.getElementById('payground-section');
//     // console.log(playGroundsection.classList);
//     playGroundsection.classList.remove('hidden')

// }
function handlekeyboradbuttonPress(event){
    const playerpressed = event.key
    console.log('player pressed', playerpressed)

    // get the expected press
    const currentAlphabetElement = document.getElementById('curent-alphabet');
    const currentAlpahbet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlpahbet.toLocaleLowerCase();
    
    console.log(playerpressed, expectedAlphabet);

    // checked matched or not

    if(playerpressed === expectedAlphabet){
        console.log('winner');
        console.log('Player pressed correct one', expectedAlphabet);
        // Update score:
        const currentScore = getTextElementById('current-score');
        const updateScore = currentScore + 1;
        setTextElementById('current-score', updateScore)



        // // Step 1: Get the current score
        // const currentScoreelemnt = document.getElementById('current-score');
        // const currentScoreText = currentScoreelemnt.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // 2. Increse the score by 1
        // const newScore = currentScore + 1;

        // // 3. Show the score
        // currentScoreelemnt.innerText = newScore;

        // // // Life update
        // // const currentLifeElment = document.getElementById('current-life');
        // // const currentLifetext = currentLifeElment.innerText;
        // // const currentLife = parseInt(currentLifetext);
        // // const newLife = currentLife + 1;
        // // currentLifeElment.innerText = newLife;


        // Start new round
        removeBackgroundColorById(expectedAlphabet)
        continoueGame();
        

    }
    else {
        console.log('You are looser')

        const currentLife = getTextElementById('current-life');
        const updateLife = currentLife - 1;
        setTextElementById('current-life', updateLife)

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifetext = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifetext);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife

        if (updateLife === 0){
            gameOver()
        }

    }
        

        
}
// capcuredkeyborad press
document.addEventListener('keyup', handlekeyboradbuttonPress)



function hiddenelementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementbyId(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function addBackgroundcolorById(elementId) {
    const elemnt = document.getElementById(elementId);
    elemnt.classList.add('bg-orange-500');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}


function play() {
    hiddenelementById('home-screen');
    showElementbyId('payground-section');
    continoueGame();

    setTextElementById('current-life', 5);
    setTextElementById('current-score', 0);
    hiddenelementById('Final-score')
}

function gameOver(){
    hiddenelementById('payground-section');
    showElementbyId('Final-score');

    // Set new score
    const lastScore = document.getElementById('current-score')
    console.log(lastScore);

    setTextValueElementById('last-score', lastScore)

}

// Rendom Alaphabet
function continoueGame() {
    // step1: Generate a rendome number
    const apphabet = getArandomAlphabet();
    console.log('Your alphabet', apphabet)

    // Set rendomly generated alphabet show
    const currentAlphabet = document.getElementById('curent-alphabet');
    currentAlphabet.innerText = apphabet;
    // Set bg color
    addBackgroundcolorById(apphabet);




}

function getArandomAlphabet() {
    // Get an aplhapet array
    const alphabetSring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetSring.split('');
    // console.log(alphabets);

    // Get a random index betwen 0-25
    const rendomNumber = Math.random() * 25;
    const index = Math.round(rendomNumber);

    const alphabet = alphabets[index];
    // console.log(index, alphabet)
    return alphabet;

}
