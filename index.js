const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  console.log(this);
  voices = this.getVoices();
  console.log(voices);

  const voiceOptions = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');

  voicesDropdown.innerHTML = voiceOptions;
}

function setVoice() {
  console.log(this.value);
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

function toggle() {
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);

voicesDropdown.addEventListener('change', setVoice);
