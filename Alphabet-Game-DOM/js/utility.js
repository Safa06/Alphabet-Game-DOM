function hideElementById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-yellow-200');
}

function removeBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-yellow-200');
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}

function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
    

}

function getARandomAlphabet(){
    //get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //get a random index between 0-25 (a-z)
    //Math.random() 0-1 er moddhe dey,tai pore 25 diye multiply
    //fraction bad dite Math.round() e dilam

    const randomAlphabetIndex = Math.round(Math.random()*25);
    const alphabet = alphabets[randomAlphabetIndex];
    return alphabet;

}

