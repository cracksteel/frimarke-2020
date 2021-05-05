function greet(name, musicGenre) {
  window.alert(`Hello, my name is ${name} and I listen to ${musicGenre}.`);
}

function showAlert() {
  greet(
    nameInput.value || "Basic",
    musicInput.value || "Whatever's on the radio"
  );
}

const bigRedButton = document.getElementById("big-red-button");
const nameInput = document.getElementById("name-input");
const musicInput = document.getElementById("music-input");

bigRedButton.addEventListener("click", showAlert);
