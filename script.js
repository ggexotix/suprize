document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       🎂 BIRTHDAY COUNTDOWN
    ================================ */
    const birthday = new Date("2026-02-27T00:00:00").getTime();

    const countdownEl = document.getElementById("countdown");
    const messageEl = document.getElementById("message");
    const slideshowEl = document.querySelector(".slideshow");

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    let slideshowStarted = false;

    function updateCountdown() {
        const now = Date.now();
        const diff = birthday - now;

        if (diff <= 0) {
            countdownEl.classList.add("hidden");

            // Smooth reveal
            messageEl.classList.remove("hidden");
            slideshowEl.classList.remove("hidden");

            messageEl.style.animation = "fadeIn 2s ease forwards";
            slideshowEl.style.animation = "fadeIn 2.5s ease forwards";

            slideshowStarted = true;
            return;
        }

        daysEl.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        hoursEl.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
        minutesEl.innerText = Math.floor((diff / (1000 * 60)) % 60);
        secondsEl.innerText = Math.floor((diff / 1000) % 60);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* ===============================
       📸 PHOTO SLIDESHOW
    ================================ */
    const photos = [
        { src: "photos/photo1.jpeg", text: "Our first beautiful memory ❤️" },
        { src: "photos/photo2.jpeg", text: "Every moment with you is special 💕" },
        { src: "photos/photo3.jpeg", text: "Forever us 💖" },
        { src: "photos/photo4.jpeg", text: "You are my everything 💖" },
        { src: "photos/photo5.jpg",  text: "My favorite smile ❤️" },
        { src: "photos/photo6.jpeg", text: "You and me forever 💕" },
        { src: "photos/photo7.jpeg", text: "Making memories with you 💖" },
        { src: "photos/photo8.jpeg", text: "My heart belongs to you 💞" }
    ];

    let photoIndex = 0;
    const slideImage = document.getElementById("slideImage");
    const caption = document.getElementById("caption");

    setInterval(() => {
        if (!slideshowStarted) return;

        slideImage.style.opacity = 0;

        setTimeout(() => {
            photoIndex = (photoIndex + 1) % photos.length;
            slideImage.src = photos[photoIndex].src;
            caption.innerText = photos[photoIndex].text;
            slideImage.style.opacity = 1;
        }, 600);

    }, 4500);
});

/* ===============================
   🎶 MUSIC CONTROL (SMOOTH FADE)
================================ */
function playMusic() {
    const music = document.getElementById("music");
    const btn = document.querySelector("button");

    if (music.paused) {
        music.volume = 0;
        music.play();
        btn.innerText = "⏸ Pause Music";

        let vol = 0;
        const fadeIn = setInterval(() => {
            if (vol >= 0.7) clearInterval(fadeIn);
            music.volume = vol;
            vol += 0.05;
        }, 200);
    } else {
        music.pause();
        btn.innerText = "🎶 Play Our Song";
    }
}

/* ===============================
   💖 FLOATING HEARTS (ROMANTIC)
================================ */
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = ["💖","💕","💗","💓","💞"][Math.floor(Math.random() * 5)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 22) + "px";
    heart.style.animationDuration = (6 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
}, 500);
