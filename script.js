
/* 1. TYPING ANIMATION */

const words = [
    "CSE Student",
    "Programmer",
    "Aspiring Developer",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const element = document.getElementById("typing");
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    element.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/* 2. FLOATING PARTICLES */

const particleContainer =
    document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 10 + 7) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random() * 0.8;

    particleContainer.appendChild(particle);

}


/* 3. 3D PROFILE CARD MOVEMENT */

const card = document.getElementById("tiltCard");
const visualArea = document.querySelector(".visual-area");

visualArea.addEventListener("mousemove", (event) => {

    const rect = visualArea.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.animation = "none";

    card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

});

visualArea.addEventListener("mouseleave", () => {

    card.style.transform = "";
    card.style.animation = "";

});


/* 4. SCROLL REVEAL */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

document.querySelectorAll(".section").forEach(section => {

    observer.observe(section);

});
