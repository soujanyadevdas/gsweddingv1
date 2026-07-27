const sealButton = document.getElementById("sealButton");
const music = document.getElementById("bgMusic");
const invitation = document.getElementById("invitationPage");

sealButton.addEventListener("click", () => {

    // Play music
    music.play().catch(console.error);

    // Prevent multiple clicks
    sealButton.style.pointerEvents = "none";

    // Slide second page up
    setTimeout(() => {

        invitation.classList.add("show");

    }, 300);

});