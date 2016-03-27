'use strict';

const popup = chrome.extension.getURL("popup/popup.html");

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
    node.appendChild(elementToAdd.cloneNode(true));
  });
}

function addIconLoop() {
  addIcon();
  setTimeout(addIconLoop, 100);
}

function generateElement() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', popup);
  iframe.setAttribute('width', 216);
  iframe.setAttribute('height', 277);

  var a = document.createElement('a');
  a.classList.add('_6gf', '_6gb');
  a.appendChild(iframe);

  elementToAdd = document.createElement('div');
  elementToAdd.classList.add('_6gd', 'emobook');
  elementToAdd.appendChild(a);
}

document.addEventListener('DOMContentLoaded', () => {
  generateElement();
  addIconLoop();
});

window.addEventListener("message", (event) => {
  if (!event.data.emobook) return;

  var emoticon = event.data.emoticon;
  var emobooks = document.querySelectorAll('.emobook iframe'), active;

  for (var i = 0; i < emobooks.length; i++) {
    if (emobooks[i].offsetParent !== null) active = emobooks[i];
  }

  var chatFooter = active.closest('.fbNubFlyoutFooter');
  console.log(chatFooter);

  // Falta inserir na chatbox :)
}, false)

// TODO: adicionar função para ocultar Emobook quando se clica fora dele
