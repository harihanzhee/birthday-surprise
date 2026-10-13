const openButton = document.getElementById("openButton");
const letterSection = document.getElementById("letterSection");
const backgroundMusic = document.getElementById("backgroundMusic");
const videoButton = document.getElementById("videoButton");

videoButton.addEventListener("click", function () {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;

    window.open(
        "./birthday-surprise.mp4",
        "_blank"
    );
});

openButton.addEventListener("click", function () {
    letterSection.hidden = false;

    letterSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    openButton.textContent = "Your letter is here ♡";
    openButton.disabled = true;

    backgroundMusic.play().catch(function (error) {
        console.log("Musik belum bisa diputar:", error);
    });
});

videoButton.addEventListener("click", function () {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
});