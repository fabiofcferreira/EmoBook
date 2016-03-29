const totalIcons = 499;
const baseId = "emo";

var finalHTML = null;
var icon = 0;

for (var i = 0; i < totalIcons; i++) {
    finalHTML += `<div class="emotion"><div id="${baseId}${i}" class="emo-icon" text=""></div></div>\n`;
    icon++;
}

console.log(finalHTML);
