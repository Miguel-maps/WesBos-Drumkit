function soundCheck(audio) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function playSoundButton(button) {
  const audio = document.querySelector(`audio[data-key="${button.getAttribute('data-key')}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  button.classList.add('playing');
  button.blur();
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Play sound by using keyboard
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

// Play sound by using mouse or touchpad
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    playSoundButton(button);
  });
});