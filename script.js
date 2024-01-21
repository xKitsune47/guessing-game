"use strict";

function answerChecking() {
    let guessedNumber = parseInt(document.getElementById("numberInput").value);
    const answerField = document.querySelector("#answer");
    if (!document.getElementById("numberInput").value) {
        answerField.innerHTML = "write a number";
    } else {
        if (guessedNumber > 50 || guessedNumber < 1) {
            answerField.innerHTML = "number not in guessing range";
        } else {
            if (listOfGuessedNumbers.includes(guessedNumber)) {
                answerField.innerHTML = `you've already tried number ${guessedNumber}`;
            } else {
                if (guessedNumber === generatedNumber) {
                    hiScore += 1;
                    answerField.innerHTML = "correct!";
                    colorChanger(true);
                    document.querySelector(
                        "#scoreItself"
                    ).innerHTML = `${hiScore}`;
                    listOfGuessedNumbers.length = 0;
                    hiScore = 0;
                    inputLockUnlock(true);
                    createPlayAgainButton();
                } else if (guessedNumber < generatedNumber) {
                    answerField.innerHTML = "incorrect, try higher";
                    listOfGuessedNumbers.push(guessedNumber);
                    hiScore += 1;
                } else if (guessedNumber > generatedNumber) {
                    answerField.innerHTML = "incorrect, try lower";
                    listOfGuessedNumbers.push(guessedNumber);
                    hiScore += 1;
                } else {
                    alert(
                        "Something unexpected happened! Please refresh the site."
                    );
                }
                const numberInputField =
                    document.getElementById("submitAnswer");
                numberInputField.addEventListener(
                    "click",
                    function clearField(event) {
                        const numberGuessed =
                            document.querySelector("#numberInput");
                        numberGuessed.value = "";
                    }
                );
            }
        }
    }
    return;
}

function colorChanger(changeTo) {
    if (changeTo === true) {
        document
            .querySelector("body")
            .setAttribute("style", "background-color: #417836;");
        document
            .querySelector("#footer")
            .setAttribute("style", "background-color: #417836;");
    } else if (changeTo === false) {
        document
            .querySelector("body")
            .setAttribute("style", "background-color: #708090;");
        document
            .querySelector("#footer")
            .setAttribute("style", "background-color: #708090;");
    } else {
        alert("Something unexpected happened! Please refresh the site.");
    }
}

function inputLockUnlock(lock) {
    if (lock == true) {
        document
            .querySelector("#numberInput")
            .setAttributeNode(document.createAttribute("disabled"));
        document
            .querySelector("#submitAnswer")
            .setAttributeNode(document.createAttribute("disabled"));
    } else if (lock == false) {
        document.querySelector("#numberInput").removeAttribute("disabled");
        document.querySelector("#submitAnswer").removeAttribute("disabled");
    } else {
        alert("Something unexpected happened! Please refresh the site.");
    }
}

function createPlayAgainButton() {
    const parentElement = document.querySelector("#buttonDestination");
    parentElement.innerHTML = `
    <input type="submit" onclick="generatingNumber();" value="Play again!" id="playAgainButton"></input>
    `;
    const playAgain = document.querySelector("#playAgainButton");
    playAgain.addEventListener("click", function ifClickedPlayAgain(event) {
        playAgain.remove();
        document.getElementById("answer").innerHTML = "";
        colorChanger(false);
        inputLockUnlock(false);
        globalThis.generatedNumber = generatingNumber();
    });
    return;
}

function onPressedEnter() {
    if (event.keyCode === 13 || event.key === "ENTER") {
        answerChecking();
        return;
    }
}

function playButton() {
    const playButtonListener = document.getElementById("playButton");
    playButtonListener.addEventListener("click", function ifClickedPlay(event) {
        playButtonListener.remove();
        const parentElement = document.querySelector("#answerBlock");
        parentElement.innerHTML = `
            <span id="answerTitle">Answer was...</span>
            <br>
            <span id="answer"></span>
            <br>
            <span id="buttonDestination"></span>
        `;
        inputLockUnlock(false);
        globalThis.generatedNumber = generatingNumber();
    });
    return;
}

function generatingNumber() {
    let generatedNumber = Math.floor(Math.random() * 50) + 1;
    globalThis.generatedNumber;
    return generatedNumber;
}

let listOfGuessedNumbers = [];
let hiScore = 0;

const siteWidth = 1280;
let scale = screen.width / siteWidth;
document
    .querySelector('meta[name="viewport"]')
    .setAttribute(
        "content",
        "width=" + siteWidth + ", initial-scale=" + scale + ""
    );
