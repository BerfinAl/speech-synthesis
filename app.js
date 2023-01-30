const synth = window.speechSynthesis;

const inputTxt = document.querySelector("textarea");
const voiceSelect = document.querySelector("select");
const speakBtn = document.querySelector(".speak");
const stopBtn = document.querySelector(".stop");
const rateRange = document.querySelector("#rate");
const pitchRange = document.querySelector("#pitch");

let utterance, voices;

function speakVoice() {
  voices = synth.getVoices();
  utterance = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = voiceSelect.selectedOptions[0].value;
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
      utterance.lang = voices[i].lang
    }
  }
  utterance.rate = rateRange.value
console.log(rateRange.value)
  utterance.pitch = pitchRange.value
  synth.speak(utterance);
}


speakBtn.addEventListener("click" , speakVoice)
pitchRange.addEventListener("change" , speakVoice)
rateRange.addEventListener("change" , speakVoice)
stopBtn.addEventListener("click", () => synth.cancel())





