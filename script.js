'use strict';

function answerChecking(){
    let guessedNumber = parseInt(document.getElementById('numberInput').value);
    console.log(typeof(guessedNumber));
    if (!document.getElementById('numberInput').value){
        document.getElementById('answer').innerHTML = 'Write a number';
    } else{
        if (guessedNumber === generatedNumber){
            document.getElementById('answer').innerHTML = 'correct!';
            lockInputs();
            createPlayAgainButton();
        } else if (guessedNumber < generatedNumber) {
            document.getElementById('answer').innerHTML = 'incorrect, try higher';
        } else if (guessedNumber > generatedNumber) {
            document.getElementById('answer').innerHTML = 'incorrect, try lower';
        } else {
            alert('Something unexpected happened! Please refresh the site.')
        }
        const numberInputField = document.getElementById('submitAnswer');
        numberInputField.addEventListener('click', function clearField(event) {
            const numberGuessed = document.getElementById('numberInput');
            numberGuessed.value = '';
        });
    }
    return;
}

function lockInputs(){
    document.getElementById('numberInput').setAttributeNode(document.createAttribute('disabled'));
    document.getElementById('submitAnswer').setAttributeNode(document.createAttribute('disabled'));
}

function createPlayAgainButton(){
    const buttonDestination = document.getElementById('answerBlock');
    const createButton = document.createElement('input');
    const parentElement = document.getElementsByTagName('span')[1];
    createButton.setAttribute('type', 'submit');
    createButton.setAttribute('onclick', 'generatingNumber();');
    createButton.setAttribute('value', 'Play again!');
    createButton.setAttribute('id', 'playAgainButton');
    parentElement.append(createButton);
    return;
}

function onPressedEnter(){
    if (event.keyCode === 13 || event.key === "ENTER"){
        answerChecking();
        return;
    }
}

function generatingNumber(){
    return Math.floor(Math.random() * 10)+1;
}
let generatedNumber = generatingNumber();
console.log(generatedNumber);

const siteWidth = 1280;
let scale = screen.width /siteWidth;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

