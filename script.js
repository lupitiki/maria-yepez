document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("hero-video");
    const START_TIME = 0.6; // Seconds to skip

    if (video) {
        // Start playing from 0.6s initially
        video.currentTime = START_TIME;

        // When video ends, reset to 0.6s and play (Custom Loop)
        video.addEventListener("ended", () => {
            video.currentTime = START_TIME;
            video.play();
        });

        // Ensure it starts at 0.6s on metadata load
        video.addEventListener('loadedmetadata', () => {
            if (video.currentTime < START_TIME) {
                video.currentTime = START_TIME;
            }
        });
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
