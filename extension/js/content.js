'use strict';

const popup = chrome.extension.getURL("popup.html");

var chatBars = null;
var emoBookIcons = null;
var baseElement = null;
var commentBoxes = null;

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
  var commentBoxes = document.getElementsByClassName('UFICommentAttachmentButtons');
  var commentIcons = document.getElementsByClassName('emobook-comments');

  /* iframe with popup.html as its source */
  var iframeComments = document.createElement('iframe');
  iframeComments.setAttribute('src', popup);
  iframeComments.setAttribute("width", 212);
  iframeComments.setAttribute("height", 280);

  var c = document.createElement('a');
  c.classList.add("_r1a");
  c.appendChild(iframeComments);


  var commentIconElement = document.createElement('div');
  commentIconElement.classList.add('emobook-comments');
  commentIconElement.appendChild(c);

  if (commentBoxes.length === commentIcons.length) return;

  Array.prototype.forEach.call(commentIcons, function(node) {
    if(node.getElementsByClassName('emobook-comments').length > 0) return;
    node.appendChild(commentIconElement.cloneNode(true));
  });
}

function addWhatsOnYourMindIcon() {

}

function addIconLoop() {
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
  addWhatsOnYourMindIcon();
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
