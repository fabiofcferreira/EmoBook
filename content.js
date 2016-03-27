'use strict';

const popup = chrome.extension.getURL("assets/popup.html");

var chatBars = null;
var emoBookIcons = null;
var elementToAdd = null;

function addIcon() {
  chatBars = document.getElementsByClassName('_552n');
  emoBookIcons = document.getElementsByClassName('emobook');

  // prevent the function for running if there are the same amount of chat
  // windows and emobook icons
  if (chatBars.length === emoBookIcons.length) return;

  Array.prototype.forEach.call(chatBars, function(node) {
    // prevent from running if there is already an emobook icon
    if (node.getElementsByClassName('emobook').length > 0) return;
    node.appendChild(elementToAdd);
  });
}

function addIconLoop() {
  addIcon();
  setTimeout(addIconLoop, 100);
}

function generateElement() {
  elementToAdd = document.createElement('div');

  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', popup);
  iframe.setAttribute('width', 216);
  iframe.setAttribute('height', 277);
  iframe.addEventListener('click', onClick);

  var a = document.createElement('a');
  a.appendChild(iframe);

  elementToAdd.classList.add('_6gd', 'emobook');
  elementToAdd.appendChild(a);
}

function onClick() {
  alert("hey");
}

document.addEventListener('DOMContentLoaded', () => {
  generateElement();
  addIconLoop();
});

window.addEventListener("message", (event) => {
  if (!event.data.emobook) return;

  var emoticon = event.data.emoticon;
  console.log(emoticon);
  // Falta inserir na chatbox :)
}, false)
