const heartContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.textContent = '❤';
    heart.style.position = 'absolute';
    heart.style.bottom = '0';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${Math.random() * 2 + 1}rem`;
    heart.style.color = '#EB6D88';
    heart.style.animation = `floatUp 4s ease-out, fadeOut 4s ease-out`;
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 500);

// Select the stars container
const starsContainer = document.querySelector('.stars');

// Generate stars
function createStars() {
    for (let i = 0; i < 100; i++) { // Increase this number for more stars
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize position and size
        const size = Math.random() * 3 + 1; // Size between 1px and 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.top = `${Math.random() * 100}vh`; // Random vertical position
        star.style.left = `${Math.random() * 100}vw`; // Random horizontal position

        starsContainer.appendChild(star);
    }
}

// Call the function to create stars
createStars();