'use strict';

const popup = chrome.extension.getURL("popup.html");

var chatBars = null;
var chatElement = null;
var chatEmoBooks = null;
var commentBoxes = null;

function genChatElement() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', popup);
  iframe.setAttribute('width', 212);
  iframe.setAttribute('height', 280);

  var a = document.createElement('a');
  a.classList.add('_6gf', '_6gb', 'open');
  a.appendChild(iframe);

  chatElement = document.createElement('div');
  chatElement.classList.add('_6gd', 'emobook-chat');
  chatElement.appendChild(a);
}

function addToChats() {
  chatBars = document.getElementsByClassName('_552n');
  chatEmoBooks = document.getElementsByClassName('emobook-chat');

  // prevent the function for running if there are the same amount of chat
  // windows and emobook icons
  if (chatBars.length === chatEmoBooks.length) return;

  Array.prototype.forEach.call(chatBars, function(node) {
    // prevent from running if there is already an emobook icon
    if (node.getElementsByClassName('emobook-chat').length > 0) return;
    node.appendChild(chatElement.cloneNode(true));
  });
}

function addToComments() {
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
    if (node.getElementsByClassName('emobook-comments').length > 0) return;
    node.appendChild(commentIconElement.cloneNode(true));
  });
}

function addToComposer() {
  if (document.getElementsByClassName('emobook-composer').length > 0) {
    return;
  }

  var composer = document.getElementById('pagelet_composer');

  if (composer === null) {
    return;
  }

  var icons = composer.getElementsByClassName('_1dsp')[0],
    buttons = composer.getElementsByClassName('_1dso')[0];

  if (icons === null || buttons === null) {
    return;
  }

  var iframe = document.createElement('iframe'),
    iframeContainer = document.createElement('div'),
    button = document.createElement('div'),
    buttonContainer = document.createElement('li');

  iframe.setAttribute('src', popup);
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', 250);
  iframeContainer.setAttribute('class', 'emobook-composer closed');
  iframeContainer.appendChild(iframe);

  button.classList.add('_42ft', '_4jy0', '_55pi', '_5vto', '_55_p', '_2agf', '_p', '_4jy3', '_517h', '_51sy');
  button.innerHTML = 'Emoticons';
  buttonContainer.setAttribute('class', 'emobook-composer-button');
  buttonContainer.appendChild(button);
  buttonContainer.addEventListener('click', function(event) {
    event.preventDefault();
    buttonContainer.classList.toggle('openToggler');
    iframeContainer.classList.toggle('opened');
  });

  buttons.insertBefore(buttonContainer, buttons.childNodes[0]);
  icons.appendChild(iframeContainer);
}


document.addEventListener('DOMContentLoaded', () => {
  genChatElement();

  (function loop() {
    addToChats();
    // addToComments();
    // addToComposer();
    setTimeout(loop, 100);
  })();
});

window.addEventListener("message", (event) => {
  if (!event.data.emobook) return;

  var emoticon = event.data.emoticon,
    emobooks = document.querySelectorAll('.emobook-chat iframe'),
    active, typeElement, focusElement;

  for (var i = 0; i < emobooks.length; i++) {
    if (emobooks[i].offsetParent !== null) active = emobooks[i];
  }

  if (active != null) {
    var chatFooter = active.closest('.fbNubFlyoutFooter');
    typeElement = chatFooter.querySelectorAll('br[data-text="true"], span[data-text="true"]')[0];
    focusElement = typeElement.parentElement;
  } else {
    // "What's in your mind?"
    typeElement = document.getElementById('pagelet_composer').getElementsByTagName('textarea')[0];
  }

  var te = document.createEvent('TextEvent');
  te.initTextEvent('textInput', true, true, window, emoticon);
  typeElement.dispatchEvent(te);
  if (focusElement != null) focusElement.dispatchEvent(new Event('focus'));

  return false;
}, false)
