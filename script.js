'use strict';

function answerChecking(){
    let guessedNumber = parseInt(document.getElementById('numberInput').value);
    if (!document.getElementById('numberInput').value){
        document.getElementById('answer').innerHTML = 'write a number';
    } else{
        if (guessedNumber > 50 || guessedNumber < 1){
            document.getElementById('answer').innerHTML = 'number not in guessing range';
        } else {
            if (listOfGuessedNumbers.includes(guessedNumber)){
                document.getElementById('answer').innerHTML = `you've already tried number ${guessedNumber}`;
            } else{
                if (guessedNumber === generatedNumber){
                    hiScore += 1;
                    document.getElementById('answer').innerHTML = 'correct!';
                    colorChanger(1);
                    document.getElementById('scoreItself').innerHTML = `${hiScore}`;
                    listOfGuessedNumbers.length = 0;
                    hiScore = 0;
                    inputLockUnlock(true);
                    createPlayAgainButton();
                } else if (guessedNumber < generatedNumber) {
                    document.getElementById('answer').innerHTML = 'incorrect, try higher';
                    listOfGuessedNumbers.push(guessedNumber);
                    hiScore += 1;
                } else if (guessedNumber > generatedNumber) {
                    document.getElementById('answer').innerHTML = 'incorrect, try lower';
                    listOfGuessedNumbers.push(guessedNumber);
                    hiScore += 1;
                } else {
                    alert('Something unexpected happened! Please refresh the site.');
                }
                const numberInputField = document.getElementById('submitAnswer');
                numberInputField.addEventListener('click', function clearField(event) {
                    const numberGuessed = document.getElementById('numberInput');
                    numberGuessed.value = '';
                });
            }
        }
    }
    return;
}

function colorChanger(changeTo){
    if (changeTo == 1){
        document.querySelector('body').setAttribute('style', 'background-color: #417836;');
        document.querySelector('footer').setAttribute('style', 'background-color: #417836;');
    } else if (changeTo == 0){
        document.querySelector('body').setAttribute('style', 'background-color: #708090;');
        document.querySelector('footer').setAttribute('style', 'background-color: #708090;');
    } else {
        alert('Something unexpected happened! Please refresh the site.');
    }
}

function inputLockUnlock(lock){
    if (lock == true){
        document.getElementById('numberInput').setAttributeNode(document.createAttribute('disabled'));
        document.getElementById('submitAnswer').setAttributeNode(document.createAttribute('disabled'));
    } else if (lock == false){
        document.getElementById('numberInput').removeAttribute('disabled');
        document.getElementById('submitAnswer').removeAttribute('disabled');
    } else {
        alert('Something unexpected happened! Please refresh the site.');
    }
}

function createPlayAgainButton(){
    const createButton = document.createElement('input');
    const parentElement = document.getElementsByTagName('span')[1];
    const breakLine = document.createElement('br');
    createButton.setAttribute('type', 'submit');
    createButton.setAttribute('onclick', 'generatingNumber();');
    createButton.setAttribute('value', 'Play again!');
    createButton.setAttribute('id', 'playAgainButton');
    parentElement.append(breakLine);
    parentElement.append(createButton);
    const playAgain = document.getElementById('playAgainButton');
    playAgain.addEventListener('click', function ifClickedPlayAgain(event){
        playAgain.remove();
        document.getElementById('answer').innerHTML = '';
        colorChanger(0);
        inputLockUnlock(false);
        globalThis.generatedNumber = generatingNumber();
    });
    return;
}

function onPressedEnter(){
    if (event.keyCode === 13 || event.key === "ENTER"){
        answerChecking();
        return;
    }
}

function playButton(){
    const playButtonListener = document.getElementById('playButton');
    playButtonListener.addEventListener('click', function ifClickedPlay(event){
        playButtonListener.remove();
        const parentElement = document.getElementById('answerBlock');
        const createAnswerTitle = document.createElement('span');
        const createAnswerPlaceholder = document.createElement('span');
        const createButtonDestination = document.createElement('span');
        const breakLine1 = document.createElement('br');
        const breakLine2 = document.createElement('br');
        let elementList = [createAnswerTitle, breakLine1, createAnswerPlaceholder, breakLine2, createButtonDestination]
        createAnswerTitle.setAttribute('id', 'answerTitle');
        createAnswerPlaceholder.setAttribute('id', 'answer');
        createButtonDestination.setAttribute('id', 'buttonDestination');
        elementList.forEach(element => parentElement.append(element));
        document.getElementById('answerTitle').innerHTML = 'Answer was...';
        document.getElementById('answer').innerHTML = '';
        document.getElementById('buttonDestination').innerHTML = '';
        inputLockUnlock(false);
        globalThis.generatedNumber = generatingNumber();
    });
    return;
}

function generatingNumber(){
    let generatedNumber = Math.floor(Math.random() * 50)+1;
    globalThis.generatedNumber;
    return generatedNumber;
}

let listOfGuessedNumbers = [];
let hiScore = 0;

const siteWidth = 1280;
let scale = screen.width /siteWidth;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');