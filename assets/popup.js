'use strict';

window.addEventListener('DOMContentLoaded', () => {
  var emoticons = document.getElementsByClassName("emo-icon");
  var x, emo, data;

  for (x = 0; x < emoticons.length; ++x) {
    document.getElementById(emoticons[x].id).addEventListener("click", function() {
      window.parent.postMessage({
        emobook: true,
        emoticon: this.getAttribute("text")
      }, "*");
    }, false);
  }
});
