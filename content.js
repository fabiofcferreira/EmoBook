'use strict';

const popup = chrome.extension.getURL("assets/popup.html");

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
    node.appendChild(generateElement());
  });
}

function addIconLoop() {
  addIcon();
  setTimeout(addIconLoop, 100);
}

function generateElement() {
  var date = new Date();
  var randomId = "emobook" + date.getTime();
  var element = document.createElement('div');

  var input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', randomId);

  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', popup);
  iframe.setAttribute('width', 216);
  iframe.setAttribute('height', 277);
  iframe.addEventListener('click', onClick);

  var label = document.createElement('label');
  label.setAttribute('for', randomId);

  var form = document.createElement('form');
  form.appendChild(input);
  form.appendChild(iframe);
  form.appendChild(label);

  element.classList.add('_6gd', 'emobook');
  element.appendChild(form);
  return element;
}

function onClick() {
  alert("hey");
}

chrome.runtime.onMessage.addListener(function(details) {
    alert('Message from frame: ' + details.data);
});

document.addEventListener('DOMContentLoaded', () => {
  addIconLoop();
});
