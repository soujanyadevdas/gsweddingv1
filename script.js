const sealButton = document.getElementById("sealButton");
const hero = document.querySelector(".hero");
const invitationPage = document.getElementById("invitationPage");
const bgMusic = document.getElementById("bgMusic");

sealButton.addEventListener("click", () => {

    bgMusic.play().catch(() => { });

    // Hide envelope
    hero.style.display = "none";

    // Show invitation
    invitationPage.classList.add("show");

    // Enable scrolling only after opening
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowY = "auto";

    // Start from the top
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    updateCountdown();
    setInterval(updateCountdown, 1000);

});


// ====================
// LIVE COUNTDOWN
// ====================

const weddingDate = new Date("August 30, 2026 09:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML =
            "<h2>We're Married ❤️</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

