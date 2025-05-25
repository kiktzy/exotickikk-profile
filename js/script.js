// script.js

const introText = "Please don't ask me because even I don't know who I am?";
const introElem = document.getElementById("intro");

let idx = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 60;
const pauseAfterTyping = 1500;

// fungsi loop typewriter
function loopTyping() {
  const full = introText;
  if (!isDeleting) {
    introElem.textContent = full.substring(0, idx + 1);
    idx++;
    if (idx === full.length) {
      isDeleting = true;
      return setTimeout(loopTyping, pauseAfterTyping);
    }
  } else {
    introElem.textContent = full.substring(0, idx - 1);
    idx--;
    if (idx === 0) {
      isDeleting = false;
    }
  }
  setTimeout(loopTyping, isDeleting ? deletingSpeed : typingSpeed);
}

// setup overlay klik
document.getElementById("overlay").addEventListener("click", () => {
  // sembunyikan overlay
  document.getElementById("overlay").style.display = "none";

  // unmute & play video
  const bg = document.querySelector(".background-video");
  bg.muted = false;
  bg.play().catch(() => {});

  // mulai typing
  loopTyping();
});