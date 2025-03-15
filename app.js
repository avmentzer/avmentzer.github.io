/// Typing animation for headline ///

document.addEventListener('DOMContentLoaded', () => {
    const text = 'MS Dynamics CRM/Power Platform Consultant, software developer, Linux sys admin, WIFI Vienna graduate, versatile programmer, IT enthusiast, and team player';
    const characters = text.split("");
    const headline = document.getElementById('headline');
    characters.forEach((character, i) => {
        setTimeout(() => {
            const span = document.createElement('span');
            span.textContent = character;
            headline.appendChild(span);
        }, i * 50);
    });

    // Set bright mode automatically on load
    const brightMode = 'container mx-auto mt-8 md:mt-10 font-sans bg-gradient-to-r from-blue-50 to-blue-100 md:from-white md:to-blue-400';
    body.classList = brightMode;
    fullName.classList.add('text-slate-700');
    toggleButton.setAttribute('src', 'media/dark.webp');
});

/// Intersection Observer for Skills Cards ///
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skillsOuterContainer > div');
    const title = document.querySelector('#skills h2');

    const appearOptions = {
        threshold: 0.25,
        rootMargin: "0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('animate-fadeInSlideLeft');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    // Observe title first
    title.classList.remove('animate-[fadeInSlideUp_0.5s_ease-out_0.1s_forwards]');
    title.classList.add('opacity-0');
    appearOnScroll.observe(title);

    // Then observe cards with staggered delay
    cards.forEach((card, index) => {
        card.classList.remove(`animate-[fadeInSlideUp_0.5s_ease-out_${0.2 + index * 0.2}s_forwards]`);
        card.classList.add('opacity-0');
        appearOnScroll.observe(card);
    });
});

/// Back to Top Button Visibility ///
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.querySelector('.back-to-top');
    const skillsSection = document.querySelector('#skills');
    const body = document.querySelector('body');

    const buttonObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });
    }, { threshold: 0.1 });

    buttonObserver.observe(skillsSection);

    // Handle margin adjustment on scroll to top
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        body.classList.add('mt-8', 'md:mt-10');
    });

    // Remove margin when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            body.classList.remove('mt-8', 'md:mt-10');
        } else {
            body.classList.add('mt-8', 'md:mt-10');
        }
    });
});

/// DarkMode ///

const toggleButton = document.getElementById('toggleDarkMode');
const body = document.querySelector('body');
const fullName = document.getElementById('fullName');
const skillCards = document.querySelectorAll('.skillCard');

toggleButton.addEventListener('click', () => {
    const brightMode = 'container mx-auto mt-8 md:mt-10 font-sans bg-gradient-to-r from-blue-50 to-blue-100 md:from-white md:to-blue-400';
    const darkMode = 'container mx-auto mt-8 md:mt-10 font-sans bg-gradient-to-r from-slate-900 to-black text-[#0a66c2] dark';
    if (body.classList.contains('dark')) {
        // Switch to bright mode
        body.classList = brightMode;
        fullName.classList.add('text-slate-700');
        toggleButton.setAttribute('src', 'media/dark.webp');
        const skillSectionTitle = document.querySelector('#skills h2');
        skillSectionTitle.classList.remove('text-white');
        skillSectionTitle.classList.add('text-gray-800');
        skillCards.forEach(card => {
            const cardDiv = card.querySelector('div');
            cardDiv.classList.remove('bg-gray-900');
            cardDiv.classList.add('bg-gradient-to-r', 'from-blue-50', 'to-blue-100');

            const heading = card.querySelector('h3');
            heading.classList.remove('text-white');
            heading.classList.add('text-gray-900');

            const paragraph = card.querySelector('p');
            paragraph.classList.remove('text-gray-400');
            paragraph.classList.add('text-gray-600');

            card.querySelectorAll('span').forEach(span => {
                span.classList.remove('bg-blue-600', 'text-blue-100');
                span.classList.add('bg-blue-200', 'text-blue-700');
            });
        });

        // Add dialog bright mode
        const dialog = document.querySelector('.contactDialog');
        dialog.classList.remove('bg-gray-900', 'border-gray-700');
        dialog.classList.add('bg-gradient-to-r', 'from-blue-50', 'to-blue-100', 'border-blue-400');
        dialog.querySelectorAll('label, h3').forEach(el => {
            el.classList.remove('text-gray-300');
            el.classList.add('text-gray-700');
        });
        dialog.querySelectorAll('input, textarea').forEach(el => {
            el.classList.remove('bg-gray-800', 'border-gray-700', 'text-white');
            el.classList.add('bg-white/50', 'border-blue-200', 'text-gray-900');
        });
    } else {
        // Switch to dark mode
        body.classList = darkMode;
        fullName.classList.remove('text-slate-700');
        toggleButton.setAttribute('src', 'media/bright.svg');
        const skillSectionTitle = document.querySelector('#skills h2');
        skillSectionTitle.classList.remove('text-gray-800');
        skillSectionTitle.classList.add('text-white');

        skillCards.forEach(card => {
            const cardDiv = card.querySelector('div');
            cardDiv.classList.remove('bg-gradient-to-r', 'from-blue-50', 'to-blue-100');
            cardDiv.classList.add('bg-gray-900');

            const heading = card.querySelector('h3');
            heading.classList.remove('text-gray-900');
            heading.classList.add('text-white');

            const paragraph = card.querySelector('p');
            paragraph.classList.remove('text-gray-600');
            paragraph.classList.add('text-gray-400');

            card.querySelectorAll('span').forEach(span => {
                span.classList.remove('bg-blue-200', 'text-blue-700');
                span.classList.add('bg-blue-600', 'text-blue-100');
            });
        });

        // Add dialog dark mode
        const dialog = document.querySelector('.contactDialog');
        dialog.classList.remove('bg-gradient-to-r', 'from-blue-50', 'to-blue-100', 'border-blue-400');
        dialog.classList.add('bg-gray-900', 'border-gray-700');
        dialog.querySelectorAll('label, h3').forEach(el => {
            el.classList.remove('text-gray-700');
            el.classList.add('text-gray-300');
        });
        dialog.querySelectorAll('input, textarea').forEach(el => {
            el.classList.remove('bg-white/50', 'border-blue-200', 'text-gray-900');
            el.classList.add('bg-gray-800', 'border-gray-700', 'text-white');
        });
    }
});

/// Contact Form ///

const contactDiv = document.querySelector('.contact');
const contactDialog = document.querySelector('.contactDialog');
const closeDialogButton = document.querySelector('.closeDialogButton');

contactDiv.addEventListener('click', () => {
    contactDialog.showModal();
});

closeDialogButton.addEventListener('click', () => {
    contactDialog.close();
});