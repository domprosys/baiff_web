// main.js
// This file will contain JavaScript for interactivity, animations, etc.

document.addEventListener('DOMContentLoaded', () => {
    console.log('BAIFF website initialized');
    
    // Desktop Video Switching System
    if (window.innerWidth >= 992) {
        initializeVideoSwitching();
    }

    // Cinematic Section Transitions with Intersection Observer - DISABLED FOR TESTING
    // const sections = document.querySelectorAll('.section-spacing');
    
    // const sectionObserver = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // Add fade-in class when section comes into view
    //             entry.target.classList.add('in-view');
    //         } else {
    //             // Remove class when section leaves view (reversible effect)
    //             entry.target.classList.remove('in-view');
    //         }
    //     });
    // }, {
    //     threshold: 0.1, // Lower threshold to trigger earlier and not interfere with snap
    //     rootMargin: '0px 0px 0px 0px' // Remove negative margin that interferes with scroll-snap
    // });

    // // Observe all sections
    // sections.forEach(section => {
    //     sectionObserver.observe(section);
    // });

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

// Desktop Video Switching Function
function initializeVideoSwitching() {
    const videos = {
        'bg-video-hero-mission': ['hero', 'mission'],
        'bg-video-competition': ['competition', 'residency'],
        'bg-video-experience': ['experience', 'interact', 'screenings', 'workshop', 'panel', 'sponsors', 'contact']
    };
    
    const videoElements = document.querySelectorAll('.bg-video');
    let currentActiveVideo = 'bg-video-hero-mission';
    
    // Preload all videos
    videoElements.forEach(video => {
        video.load();
    });
    
    // Function to switch active video
    function switchToVideo(videoClass) {
        if (videoClass === currentActiveVideo) return;
        
        // Remove active class from current video
        document.querySelector(`.${currentActiveVideo}`).classList.remove('active');
        
        // Add active class to new video and play it
        const newVideo = document.querySelector(`.${videoClass}`);
        newVideo.classList.add('active');
        newVideo.play().catch(e => console.log('Video play failed:', e));
        
        currentActiveVideo = videoClass;
        console.log('Switched to video:', videoClass);
    }
    
    // Set up Intersection Observer for mobile screen sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                console.log('Section visible:', sectionId);
                
                // Find which video corresponds to this section
                for (const [videoClass, sections] of Object.entries(videos)) {
                    if (sections.includes(sectionId)) {
                        console.log('Found match - switching to:', videoClass);
                        switchToVideo(videoClass);
                        break;
                    }
                }
            }
        });
    }, {
        root: document.querySelector('.mobile-screen'),
        threshold: 0.5 // Trigger when 50% of section is visible
    });
    
    // Observe all sections within the mobile screen
    const sections = document.querySelectorAll('.mobile-screen .section-spacing');
    console.log('Found sections to observe:', sections.length);
    sections.forEach(section => {
        if (section.id) {
            console.log('Observing section:', section.id);
            sectionObserver.observe(section);
        }
    });
}
