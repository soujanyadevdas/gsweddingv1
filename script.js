const sealButton = document.getElementById("sealButton");
const invitationPage = document.getElementById("invitationPage");
const continueBtn = document.getElementById("continueBtn");
const music = document.getElementById("bgMusic");

sealButton.addEventListener("click", () => {

    music.play().catch(() => { });

    document.querySelector(".hero").style.opacity = "0";
    document.querySelector(".hero").style.pointerEvents = "none";

    setTimeout(() => {
        invitationPage.classList.add("show");
    }, 600);

});

continueBtn.addEventListener("click", () => {

    document.body.classList.add("fadeOut");

    setTimeout(() => {

        window.location.href = "https://gsweddiing.my.canva.site/soujanyagaurav";

    }, 900);

});