// R. Zheng's World - Interactive JavaScript

// Music Player Functionality
document.addEventListener('DOMContentLoaded', function() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');

    // Set volume to 50%
    bgMusic.volume = 0.5;

    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.classList.add('playing');
        } else {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
        }
    });
});

// Toggle continent sections (expand/collapse)
function toggleContinent(continentId) {
    const section = document.getElementById(continentId);
    section.classList.toggle('collapsed');
}

// Initialize: Collapse all sections on mobile by default
document.addEventListener('DOMContentLoaded', function() {
    // Collapse all continent sections on mobile devices
    if (window.innerWidth <= 768) {
        const continentSections = document.querySelectorAll('.continent-section');
        continentSections.forEach(section => {
            section.classList.add('collapsed');
        });
    }
    // Smooth scroll enhancement for navigation links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Get the sticky nav height for offset
                const navHeight = document.querySelector('.main-nav')?.offsetHeight || 0;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navHeight - 20; // 20px extra padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add fade-in animation for sections on scroll
    const observerOptions = {
        threshold: 0,
        rootMargin: '100px 0px 100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe content sections and continent sections separately
    const travelSection = document.getElementById('travel-photography');
    const sections = document.querySelectorAll('.content-section, .continent-section');

    sections.forEach(section => {
        // Don't apply fade-in animation to Travel & Photography section's heading and nav
        if (section === travelSection) {
            // Only animate the gallery container, not the heading
            const gallery = section.querySelector('.gallery');
            if (gallery) {
                gallery.style.opacity = '0';
                gallery.style.transform = 'translateY(20px)';
                gallery.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        }
    });

    // Observe the gallery container within Travel & Photography
    if (travelSection) {
        const gallery = travelSection.querySelector('.gallery');
        if (gallery) {
            observer.observe(gallery);
        }
    }

    // Highlight active navigation link based on scroll position
    const navLinks = document.querySelectorAll('.section-links a, .continent-link');

    window.addEventListener('scroll', function() {
        let current = '';
        const contentSections = document.querySelectorAll('.content-section, .continent-section');

        contentSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});

// Resume Modal Functions
function openResumeModal() {
    const modal = document.getElementById('resumeModal');
    const iframe = document.getElementById('resumeFrame');
    iframe.src = 'https://engs4-lab1.vercel.app/assets/documents/CV_Ruichen%20Zheng3.3.pdf';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
    const modal = document.getElementById('resumeModal');
    const iframe = document.getElementById('resumeFrame');
    modal.classList.remove('active');
    iframe.src = '';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the content
document.addEventListener('click', function(event) {
    const modal = document.getElementById('resumeModal');
    if (event.target === modal) {
        closeResumeModal();
    }
});
