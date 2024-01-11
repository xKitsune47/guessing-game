'use strict';

function answerChecking(){
    let guessedNumber = parseInt(document.getElementById('numberInput').value);
    console.log(typeof(guessedNumber));
    if (!document.getElementById('numberInput').value){
        document.getElementById('answer').innerHTML = 'Write a number';
    } else{
        if (guessedNumber === 3){
            document.getElementById('answer').innerHTML = 'correct!';
        } else if (guessedNumber < 3) {
            document.getElementById('answer').innerHTML = 'incorrect, try higher';
        } else if (guessedNumber > 3) {
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

function onPressedEnter(){
    if (event.keyCode === 13 || event.key === "ENTER"){
        answerChecking();
        return;
    }
}

const siteWidth = 1280;
let scale = screen.width /siteWidth;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

