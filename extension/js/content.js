'use strict';

const popup = chrome.extension.getURL("popup.html");

var chatBars = null;
var emoBookIcons = null;
var baseElement = null;

function addChatIcon() {
  chatBars = document.getElementsByClassName('_552n');
  emoBookIcons = document.getElementsByClassName('emobook');

  var chatIconElement = document.createElement('div');
  chatIconElement.classList.add('_6gd', 'emobook');
  chatIconElement.appendChild(baseElement);

  // prevent the function for running if there are the same amount of chat
  // windows and emobook icons
  if (chatBars.length === emoBookIcons.length) return;

  Array.prototype.forEach.call(chatBars, function(node) {
    // prevent from running if there is already an emobook icon
    if (node.getElementsByClassName('emobook').length > 0) return;
    node.appendChild(chatIconElement.cloneNode(true));
  });
}

function addCommentsIcon() {

}

function addWhatsOnYourMindIcon() {
  if (document.getElementsByClassName('emobook-composer').length > 0) {
    return;
  }

  var composer = document.getElementById('pagelet_composer');
  var icons = composer.getElementsByClassName('_1dsp')[0];
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', popup);
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', 250);

  var div = document.createElement('div');
  div.setAttribute('class', 'emobook-composer closed');
  div.appendChild(iframe);

  var list = composer.getElementsByClassName('_1dso')[0];
  var li = document.createElement('li');
  li.setAttribute('class', 'emobook-composer-button');
  li.innerHTML = `<div class="_42ft _4jy0 _55pi _5vto _55_p _2agf _p _4jy3 _517h _51sy">Emoticons</div>`;
  li.addEventListener('click', function(event) {
    event.preventDefault();
    li.classList.toggle('openToggler');
    div.classList.toggle('opened');
  });

  list.insertBefore(li, list.childNodes[0]);
  icons.appendChild(div);
}

function addIconLoop() {
  addWhatsOnYourMindIcon();
  addChatIcon();
  addCommentsIcon();
  setTimeout(addIconLoop, 100);
}

function generateElement() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', popup);
  iframe.setAttribute('width', 212);
  iframe.setAttribute('height', 280);

  var a = document.createElement('a');
  a.classList.add('_6gf', '_6gb');
  a.appendChild(iframe);

  baseElement = a;
}

document.addEventListener('DOMContentLoaded', () => {
  generateElement();
  addIconLoop();
});

window.addEventListener("message", (event) => {
  if (!event.data.emobook) return;

  var emoticon = event.data.emoticon,
    emobooks = document.querySelectorAll('.emobook iframe'),
    active;

  for (var i = 0; i < emobooks.length; i++) {
    if (emobooks[i].offsetParent !== null) active = emobooks[i];
  }

  var chatFooter = active.closest('.fbNubFlyoutFooter'),
    textArea = chatFooter.querySelectorAll('br[data-text="true"], span[data-text="true"]')[0],
    textAreaParent = textArea.parentElement;

  var te = document.createEvent('TextEvent');
  te.initTextEvent('textInput', true, true, window, emoticon);
  textArea.dispatchEvent(te);
  textAreaParent.dispatchEvent(new Event('focus'));

  return false;
}, false)
