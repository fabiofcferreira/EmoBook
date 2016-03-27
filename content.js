'use strict';

var chatBars = null;
var emoBookIcons = null;

function addIcon() {
  chatBars = document.getElementsByClassName('_552n');
  emoBookIcons = document.getElementsByClassName('emobook');

  // prevent the function for running if there are the same amount of chat
  // windows and emobook icons
  if (chatBars.length === emoBookIcons.length) return;

  Array.prototype.forEach.call(chatBars, function(node) {
    // prevent from running if there is already an emobook icon
    if (node.getElementsByClassName('emobook').length > 0) return;

    var icons = node.getElementsByClassName('_6gd');
    var emobook = document.createElement('div');

    emobook.classList.add('_6gd', 'emobook');
    emobook.innerHTML = '<a class="_6gb _6gf" role="button" title="Add an emoticon" href="#"></a>';
    emobook.addEventListener("click", onClick);
    node.appendChild(emobook);
  });
}

function addIconLoop() {
  addIcon();
  setTimeout(addIconLoop, 100);
}

function onClick() {
  alert("hey");
}

document.addEventListener('DOMContentLoaded', () => {
  addIconLoop();
});
