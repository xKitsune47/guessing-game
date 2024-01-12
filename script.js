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
        document.getElementById('numberInput').removeAttribute('disabled');
        document.getElementById('submitAnswer').removeAttribute('disabled');
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
        createAnswerTitle.setAttribute('id', 'answerTitle');
        createAnswerPlaceholder.setAttribute('id', 'answer');
        createButtonDestination.setAttribute('id', 'buttonDestination');
        parentElement.append(createAnswerTitle);
        parentElement.append(breakLine1);
        parentElement.append(createAnswerPlaceholder);
        parentElement.append(breakLine2);
        parentElement.append(createButtonDestination);
        document.getElementById('answerTitle').innerHTML = 'Answer was...';
        document.getElementById('answer').innerHTML = '';
        document.getElementById('buttonDestination').innerHTML = '';
        document.getElementById('numberInput').removeAttribute('disabled');
        document.getElementById('submitAnswer').removeAttribute('disabled');
    });
    return;
}

function generatingNumber(){
    let generatedNumber = Math.floor(Math.random() * 10)+1;
    console.log(generatedNumber);
    return generatedNumber;
}
let generatedNumber = generatingNumber();

const siteWidth = 1280;
let scale = screen.width /siteWidth;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');


/* 
dodac logike dla przycisku ponownej gry
dodac usuwanie przycisku ponownej gry po kliknieciu
dodac odblokowanie inputow po kliknieciu grania ponownie
dodac wynik rozgrywki + hiScore
dodac sprawdzanie czy numer juz byl zgadywany, jak tak to wyswietla powiadomienie ze juz byl
dodac zmiane koloru tla po wygranej, po 2s wraca do normalnego
*/