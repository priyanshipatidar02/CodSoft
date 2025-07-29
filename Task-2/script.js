// Dark mode toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '✧' : '✦';
});


// Typewriter effect
const text = "Stay Focused, Study Smarter.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Fake Pomodoro timer
let timer; // interval reference
let timeLeft = 25 * 60; 

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timerDisplay').textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('startTimer').addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                timer = null;
                alert('Time\'s up!');
            }
        }, 1000);
    }
});

document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60;
    updateDisplay();
});

updateDisplay();

// Sign In modal logic
const modal = document.getElementById('signInModal');
const getStartedBtn = document.querySelector('footer .btn.primary');
const closeBtn = document.querySelector('.close-btn');

getStartedBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});