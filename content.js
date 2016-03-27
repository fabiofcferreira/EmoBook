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
    var icons = node.getElementsByClassName('_6gd');

    if (icons[icons.length - 1].classList.contains('emobook')) return;

    var el = document.createElement('div');
    el.classList.add('_6gd', 'emobook');
    el.innerHTML = '<a class="_6gb _6gf" role="button" title="Add an emoticon" href="#"></a>';
    el.addEventListener("click", onClick);
    node.appendChild(el);
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
