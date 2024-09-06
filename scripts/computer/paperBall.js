const paperBall = document.getElementById("paper-ball");
const closeButton = document.getElementById("dictionary-close-sign");

const paperContainer = document.getElementById("key-dictionary");
const screenOverlay = document.getElementById("full-screen-overlay");

const onPaperBallClick = (e) => { setPaperVisibility(true) }
const onCloseButtonClick = (e) => { setPaperVisibility(false) }

const setPaperVisibility = (isVisible) => {
    new Audio("../../songs/computer/paper-rustle-81855.mp3").play();

    const visibility = isVisible ? "block" : "none";

    screenOverlay.style.display = visibility;
    paperContainer.style.display = visibility;
}

paperBall.addEventListener("click", onPaperBallClick);
closeButton.addEventListener("click", onCloseButtonClick);