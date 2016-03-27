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

    var date = new Date();
    var randomId = "emobook" + date.getTime();

    emobook.classList.add('_6gd', 'emobook');
    emobook.innerHTML = `<form>
      <input type="checkbox" id="${randomId}">
      <div>
        <div class="row">
          <div class="emotion">
            <div id="f17" class="emo-icon" text="💓"></div>
          </div>
          <div class="emotion">
            <div id="f18" class="emo-icon" text="💔"></div>
          </div>
          <div class="emotion">
            <div id="f19" class="emo-icon" text="💖"></div>
          </div>
          <div class="emotion">
            <div id="f20" class="emo-icon" text="💗"></div>
          </div>
          <div class="emotion">
            <div id="g1" class="emo-icon" text="💘"></div>
          </div>
          <div class="emotion">
            <div id="g2" class="emo-icon" text="💙"></div>
          </div>
          <div class="emotion">
            <div id="g3" class="emo-icon" text="💚"></div>
          </div>
          <div class="emotion">
            <div id="g4" class="emo-icon" text="💛"></div>
          </div>
          <div class="emotion">
            <div id="g5" class="emo-icon" text="💜"></div>
          </div>
          <div class="emotion">
            <div id="g6" class="emo-icon" text="💝"></div>
          </div>
          <div class="emotion">
            <div id="h5" class="emo-icon" text="😁"></div>
          </div>
          <div class="emotion">
            <div id="h6" class="emo-icon" text="😂"></div>
          </div>
          <div class="emotion">
            <div id="h7" class="emo-icon" text="😃"></div>
          </div>
          <div class="emotion">
            <div id="h8" class="emo-icon" text="😄"></div>
          </div>
          <div class="emotion">
            <div id="h9" class="emo-icon" text="😆"></div>
          </div>
          <div class="emotion">
            <div id="h10" class="emo-icon" text="😉"></div>
          </div>
          <div class="emotion">
            <div id="h11" class="emo-icon" text="😋"></div>
          </div>
          <div class="emotion">
            <div id="h12" class="emo-icon" text="😌"></div>
          </div>
          <div class="emotion">
            <div id="h13" class="emo-icon" text="😍"></div>
          </div>
          <div class="emotion">
            <div id="h14" class="emo-icon" text="😏"></div>
          </div>
        </div>
        <div class="row">
          <div class="emotion">
            <div id="h15" class="emo-icon" text="😒"></div>
          </div>
          <div class="emotion">
            <div id="h16" class="emo-icon" text="😓"></div>
          </div>
          <div class="emotion">
            <div id="h17" class="emo-icon" text="😔"></div>
          </div>
          <div class="emotion">
            <div id="h18" class="emo-icon" text="😖"></div>
          </div>
          <div class="emotion">
            <div id="h19" class="emo-icon" text="😘"></div>
          </div>
          <div class="emotion">
            <div id="h20" class="emo-icon" text="😚"></div>
          </div>
          <div class="emotion">
            <div id="i1" class="emo-icon" text="😜"></div>
          </div>
          <div class="emotion">
            <div id="i2" class="emo-icon" text="😝"></div>
          </div>
          <div class="emotion">
            <div id="i3" class="emo-icon" text="😞"></div>
          </div>
          <div class="emotion">
            <div id="i4" class="emo-icon" text="😠"></div>
          </div>
          <div class="emotion">
            <div id="i5" class="emo-icon" text="😡"></div>
          </div>
          <div class="emotion">
            <div id="i6" class="emo-icon" text="😢"></div>
          </div>
          <div class="emotion">
            <div id="i7" class="emo-icon" text="😣"></div>
          </div>
          <div class="emotion">
            <div id="i8" class="emo-icon" text="😤"></div>
          </div>
          <div class="emotion">
            <div id="i9" class="emo-icon" text="😥"></div>
          </div>
          <div class="emotion">
            <div id="i10" class="emo-icon" text="😨"></div>
          </div>
          <div class="emotion">
            <div id="i11" class="emo-icon" text="😩"></div>
          </div>
          <div class="emotion">
            <div id="i12" class="emo-icon" text="😪"></div>
          </div>
          <div class="emotion">
            <div id="i13" class="emo-icon" text="😫"></div>
          </div>
          <div class="emotion">
            <div id="i14" class="emo-icon" text="😭"></div>
          </div>
        </div>
        <div class="row">
          <div class="emotion">
            <div id="i15" class="emo-icon" text="😰"></div>
          </div>
          <div class="emotion">
            <div id="i16" class="emo-icon" text="😱"></div>
          </div>
          <div class="emotion">
            <div id="i17" class="emo-icon" text="😲"></div>
          </div>
          <div class="emotion">
            <div id="i18" class="emo-icon" text="😳"></div>
          </div>
          <div class="emotion">
            <div id="i19" class="emo-icon" text="😵"></div>
          </div>
          <div class="emotion">
            <div id="i20" class="emo-icon" text="😷"></div>
          </div>
          <div class="emotion">
            <div id="j1" class="emo-icon" text="😸"></div>
          </div>
          <div class="emotion">
            <div id="j2" class="emo-icon" text="😹"></div>
          </div>
          <div class="emotion">
            <div id="j3" class="emo-icon" text="😺"></div>
          </div>
          <div class="emotion">
            <div id="j4" class="emo-icon" text="😻"></div>
          </div>
          <div class="emotion">
            <div id="j5" class="emo-icon" text="😼"></div>
          </div>
          <div class="emotion">
            <div id="j6" class="emo-icon" text="😽"></div>
          </div>
          <div class="emotion">
            <div id="j7" class="emo-icon" text="😿"></div>
          </div>
          <div class="emotion">
            <div id="j8" class="emo-icon" text="🙀"></div>
          </div>
          <div class="emotion">
            <div id="j9" class="emo-icon" text="🙋"></div>
          </div>
          <div class="emotion">
            <div id="j10" class="emo-icon" text="🙌"></div>
          </div>
          <div class="emotion">
            <div id="j11" class="emo-icon" text="🙍"></div>
          </div>
          <div class="emotion">
            <div id="j12" class="emo-icon" text="🙏"></div>
          </div>
          <div class="emotion">
            <div id="j13" class="emo-icon" text="☝"></div>
          </div>
          <div class="emotion">
            <div id="j14" class="emo-icon" text="☺"></div>
          </div>
        </div>
        <div class="row">
          <div class="emotion">
            <div id="j15" class="emo-icon" text="⚡"></div>
          </div>
          <div class="emotion">
            <div id="j16" class="emo-icon" text="⛄"></div>
          </div>
          <div class="emotion">
            <div id="j17" class="emo-icon" text="✊"></div>
          </div>
          <div class="emotion">
            <div id="j18" class="emo-icon" text="✋"></div>
          </div>
          <div class="emotion">
            <div id="j19" class="emo-icon" text="✌"></div>
          </div>
          <div class="emotion">
            <div id="j20" class="emo-icon" text="☀"></div>
          </div>
          <div class="emotion">
            <div id="k1" class="emo-icon" text="☁"></div>
          </div>
          <div class="emotion">
            <div id="k2" class="emo-icon" text="☔"></div>
          </div>
          <div class="emotion">
            <div id="k3" class="emo-icon" text="☕"></div>
          </div>
          <div class="emotion">
            <div id="k4" class="emo-icon" text="✨"></div>
          </div>
          <div class="emotion">
            <div id="k5" class="emo-icon" text="❤"></div>
          </div>
          <div class="emotion">
            <div id="f14" class="emo-icon" text="💏"></div>
          </div>
          <div class="emotion">
            <div id="f16" class="emo-icon" text="💑"></div>
          </div>
        </div>
      </div>
      <label for="${randomId}"></label>
    </form>`;
    //emobook.addEventListener("click", onClick);
    // TODO: adicionar o listener aos clicks dentro do div
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
