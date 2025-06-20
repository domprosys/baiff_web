// main.js
// This file will contain JavaScript for interactivity, animations, etc.

document.addEventListener('DOMContentLoaded', () => {
    console.log('BAIFF website initialized');
    // Future JavaScript code will go here

    // Setup for scrolling section titles
    const sectionTitles = document.querySelectorAll('.section__title');

    sectionTitles.forEach(titleElement => {
        const originalText = titleElement.textContent.trim();
        if (originalText) {
            // The text to be repeated is the full original title plus spacing.
            const repeatedUnit = originalText + "\u00A0\u00A0\u00A0"; // Add non-breaking spaces for separation

            // Create the long string by repeating the full title unit 10 times.
            const longText = repeatedUnit.repeat(10);

            // Create the wrapper that will animate
            const scrollingTextWrapper = document.createElement('div');
            scrollingTextWrapper.classList.add('scrolling-text-wrapper');
            
            // Create and append two segments of the long text for a seamless loop.
            for (let i = 0; i < 2; i++) {
                const segment = document.createElement('span');
                segment.textContent = longText;
                scrollingTextWrapper.appendChild(segment);
            }

            // Clear the original h2 content and append the new scrolling structure
            titleElement.innerHTML = ''; 
            titleElement.appendChild(scrollingTextWrapper);
        }
    });

    // Automatic horizontal scroll for screenings
    const scrollContainers = document.querySelectorAll('.screenings-scroll-container');
    const scrollIntervalTime = 5000; // 5 seconds
    const staggerDelay = 500; // 0.5 seconds stagger between each container's scroll start

    scrollContainers.forEach((container, index) => {
        let currentCardIndex = 0;
        let scrollInterval;

        // For debugging which container this is (e.g., Day 1, Day 2, Day 3)
        // We can get its preceding h3.day-title if needed, or just rely on order.
        // console.log('Setting up auto-scroll for container:', container);

        const cards = container.querySelectorAll('.card');
        console.log('Container found with cards:', cards.length, container.previousElementSibling ? container.previousElementSibling.textContent : 'Unknown Day'); // Log card count for this container
        
        if (cards.length <= 1) {
            console.log('Not enough cards to scroll in this container.');
            return; // No need to scroll if 0 or 1 card
        }

        const scrollToNextCard = () => {
            currentCardIndex = (currentCardIndex + 1) % cards.length;
            const nextCard = cards[currentCardIndex];
            
            // Simplified scrollAmount: offsetLeft of the card is the target for container's scrollLeft
            const scrollAmount = nextCard.offsetLeft;
            
            // console.log('Scrolling to card:', currentCardIndex, 'at offsetLeft:', scrollAmount, 'in container for', container.previousElementSibling ? container.previousElementSibling.textContent : 'Unknown Day');
            container.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        };

        const startAutoScroll = () => {
            // Clear existing interval before starting a new one to prevent multiple intervals
            clearInterval(scrollInterval);
            scrollInterval = setInterval(scrollToNextCard, scrollIntervalTime);
        };

        const stopAutoScroll = () => {
            clearInterval(scrollInterval);
        };

        // Stagger the start of the auto-scroll for each container
        setTimeout(() => {
            startAutoScroll(); // Start scrolling for this container
        }, index * staggerDelay);

        // Optional: Pause scrolling when the user hovers over the container
        container.addEventListener('mouseenter', stopAutoScroll);
        container.addEventListener('mouseleave', startAutoScroll);
        

    });

    // Hamburger Menu Logic
    const hamburgerBtn = document.querySelector('.hamburger-menu-button');
    const closeNavBtn = document.querySelector('.close-nav-button');
    const nav = document.querySelector('.fullscreen-nav');
    const navLinks = document.querySelectorAll('.fullscreen-nav .nav-link');

    if (hamburgerBtn && closeNavBtn && nav) {
        const openNav = () => {
            nav.classList.add('open');
            document.body.classList.add('nav-open');
        };

        const closeNav = () => {
            nav.classList.remove('open');
            document.body.classList.remove('nav-open');
        };

        hamburgerBtn.addEventListener('click', openNav);
        closeNavBtn.addEventListener('click', closeNav);

        // Close nav when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', closeNav);
        });
    }

    // Countdown Timer Logic
    const countdownTimer = () => {
        const countdownDate = new Date("October 1, 2025 00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = countdownDate - now;

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");
        const countdownTimerEl = document.querySelector(".countdown-timer-grid");

        if (!countdownTimerEl) return; // Exit if timer element not found

        if (timeLeft < 0) {
            countdownTimerEl.innerHTML = "<div class='countdown-ended'>The submission deadline has passed!</div>";
            clearInterval(timerInterval); // Stop the timer
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if (daysEl) daysEl.innerText = days < 10 ? '0' + days : days;
        if (hoursEl) hoursEl.innerText = hours < 10 ? '0' + hours : hours;
        if (minutesEl) minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        if (secondsEl) secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
    };

    // Check if the countdown timer element exists before setting the interval
    let timerInterval; // Declare timerInterval here to be accessible in timeLeft < 0 block
    if (document.querySelector(".countdown-timer-grid")) {
        timerInterval = setInterval(countdownTimer, 1000);
        countdownTimer(); // Initial call to display immediately
    }
});
