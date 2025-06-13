document.addEventListener("DOMContentLoaded", function () {
    // Start Button to Enter Portfolio
    document.getElementById("start-btn").addEventListener("click", function () {
        document.getElementById("hero").style.display = "none"; // Hide hero section
        document.getElementById("main-content").classList.remove("hidden"); // Show main content
        showSection('about'); // Default: Show "About Me"
    });

    // Navbar Buttons Event Listeners
    document.getElementById("about-btn").addEventListener("click", function () {
        showSection("about");
    });

    document.getElementById("projects-btn").addEventListener("click", function () {
        showSection("projects");
    });

    document.getElementById("skills-btn").addEventListener("click", function () {
        showSection("skills");
    });

    document.getElementById("contact-btn").addEventListener("click", function () {
        showSection("contact");
    });
});

// Function to Show Only One Section at a Time
function showSection(sectionId) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none"; // Hide all sections
    });

    document.getElementById(sectionId).style.display = "block"; // Show the selected section
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" }); // Scroll to section
}

const bgMusic = document.getElementById("bg-music");
const muteButton = document.getElementById("mute-button");

// Play music on page load
window.addEventListener("load", () => {
    bgMusic.volume = 0.5; // Set initial volume (optional)
    bgMusic.play().catch(() => console.log("User interaction needed to play audio."));
});

// Toggle mute
muteButton.addEventListener("click", () => {
    if (bgMusic.muted) {
        bgMusic.muted = false;
        muteButton.textContent = "🔊"; // Sound on
    } else {
        bgMusic.muted = true;
        muteButton.textContent = "🔇"; // Sound off
    }
});


// Retro Sound Effect for Hover on Score Cards
document.querySelectorAll(".score-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        new Audio('img\\char\\lm2.ogg').play();
    });
});


function showSection(sectionId) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";

    // If "About Me" is selected, show the game button and hide after 5s
    if (sectionId === "about") {
        let gameStart = document.getElementById("game-start");
        gameStart.style.display = "block";

        // Hide button after 5 seconds
        setTimeout(() => {
            gameStart.style.display = "none";
        }, 35000);
    }
}


document.getElementById("select-character-btn").addEventListener("click", function() {
    document.getElementById("character-modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("character-modal").style.display = "none";
});

bgMusic.volume = 1.0;