const playSound = () => {
    const audioButton = document.querySelector("audio");
    audioButton.play();
};

const showAlert = (message) => {
    alert(message);
};

const soundButtonElement = document.getElementById("sound-button");
const alertButtonElement = document.getElementById("alert-button");

// script.js:3 Uncaught (in promise) NotAllowedError: play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD
// buttonElement.onclick = playSound();

// To assign a reference to a function, we don't use parentheses
// If we use parentheses, the function will be called immediately
soundButtonElement.onclick = playSound;

// To assign a reference to a function with parameters, we need to use an arrow function
alertButtonElement.onclick = () => showAlert("Hello, this is an alert!");
