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
  elementToAdd = document.createElement('div');

  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', popup);
  iframe.setAttribute('width', 216);
  iframe.setAttribute('height', 277);

  var input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('class', 'hidden');

  var a = document.createElement('a');
  a.classList.add('_6gf', '_6gb');
  a.appendChild(iframe);

  var label = document.createElement('label');
  label.appendChild(input);
  label.appendChild(a);

  elementToAdd.classList.add('_6gd', 'emobook');
  elementToAdd.appendChild(label);
}

document.addEventListener('DOMContentLoaded', () => {
  generateElement();
  addIconLoop();
});

window.addEventListener("message", (event) => {
  if (!event.data.emobook) return;

  var emoticon = event.data.emoticon,
    emobooksQuery = document.querySelectorAll('.emobook input:checked'),
    textBox = emobooksQuery[0].closest('._1d4_'),
    textplace = textBox.querySelectorAll('br[data-text="true"]');

  if (textplace == null) {
    textplace = textBox.querySelectorAll('span[data-text="true"]');
  }

  console.log(textplace);

  // Falta inserir na chatbox :)
}, false)

// TODO: adicionar função para ocultar Emobook quando se clica fora dele
