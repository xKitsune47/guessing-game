'use strict';

function answerChecking(){
    return console.log('uwu');
}

const siteWidth = 1280;
let scale = screen.width /siteWidth;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

// const element = document.querySelector('body');
// element.style.width = `${siteWidth}px`;
