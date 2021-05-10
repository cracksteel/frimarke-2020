let recording = false;
let button = document.getElementById("button");
let qrCode = document.getElementById("qr-code");
let prompt = document.getElementById("prompt");

button.onclick = async () => {
  if (recording) return;
  recording = true;
  button.classList.add("recording");
  await countdownFrom(15);
  button.classList.add("hidden");
  qrCode.classList.remove("hidden");
  prompt.textContent = "skriv ut";
};

function countdownFrom(seconds) {
  return new Promise((resolve) => {
    let millis = seconds * 1000;
    let start = performance.now();

    let intervalId = setInterval(() => {
      let timeRemaining = (millis - performance.now() + start) / 1000;

      if (timeRemaining > 0) {
        prompt.textContent = timeRemaining.toFixed(2);
      } else {
        prompt.textContent = (0).toFixed(2);
        clearInterval(intervalId);
        resolve();
      }
    }, 10);
  });
}
