function clickHandler(n) {
    "use strict";
    var emotionText = document.getElementById(n).getAttribute("text");
    clip(emotionText);
}

function clip(text) {
    "use strict";
    var copyElement = document.createElement('input');
    copyElement.setAttribute("type", "text");
    copyElement.setAttribute("value", text);
    //copyElement.setAttribute("style", "display: none;");
    copyElement = document.body.appendChild(copyElement);
    copyElement.select();
    if (document.execCommand("copy") === true) {
        copyElement.remove();
        console.log("Copied.");
    } else {
        console.log("Couldn't copy.");
    }
}

//document.getElementById('f17').addEventListener("click", clickHandler);

var classArray = document.getElementsByClassName("emo-icon");
var x, currentEmotion;

for (x = 0; x < classArray.length; ++x) {
    currentEmotion = x;
    (function (array, currEmotion) {
        document.getElementById(array[currEmotion].id).addEventListener("click", function () { clickHandler(array[currEmotion].id); }, false);
    })(classArray, currentEmotion);
}