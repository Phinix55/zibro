document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const form = document.getElementById('subscribe-form');
    const emailInput = form.querySelector('input[type="email"]');
    const cityInput = form.querySelector('input[type="text"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const city = cityInput.value;

        // Here you would typically send the email and city to your server
        console.log(`Subscribed: ${email} from ${city}`);

        // Simulate sending an email (this would be done on the server in a real application)
        simulateSendEmail(email, city);

        form.reset();
    });

    function simulateSendEmail(email, city) {
        // This is a client-side simulation. In a real application, this would be handled server-side.
        const message = `Thank you for subscribing! We're excited to launch Zibro in ${city} soon. Stay tuned for updates!`;
        alert(message);
    }

    // Add parallax effect to the background
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        document.body.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
    });

    // Animate the glitch effect on hover
    const glitchElement = document.querySelector('.glitch');
    glitchElement.addEventListener('mouseover', () => {
        glitchElement.style.animation = 'none';
        void glitchElement.offsetWidth; // Trigger reflow
        glitchElement.style.animation = null;
    });
});

