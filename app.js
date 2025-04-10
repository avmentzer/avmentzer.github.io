/// Typing animation for headline ///

document.addEventListener('DOMContentLoaded', () => {
    const text = 'Technical Consultant – MS Dynamics CRM, software developer, Linux admin, WIFI Vienna graduate, with strong problem-solving, communication, and teamwork skills.';
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
    const brightMode = 'container mx-auto mt-4 md:mt-10 font-sans bg-gradient-to-r from-blue-50 to-blue-100 md:from-white md:to-blue-400';
    body.classList = brightMode;
    fullName.classList.add('text-slate-700');
    toggleButton.setAttribute('src', 'media/dark.webp');
});

/// Intersection Observer for Skills Cards ///
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('#skills');
    const cards = document.querySelectorAll('.skillsOuterContainer > div');
    const title = document.querySelector('#skills h2');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                // Animate title first
                setTimeout(() => {
                    title.classList.add('animate-fadeInSlideLeft');
                }, 50);

                // Animate cards with staggered delay
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-fadeInSlideLeft');
                    }, 200 * (index + 1)); // 200ms delay between each card
                });

                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3, // Requires 30% of section to be visible
        rootMargin: "0px"
    });

    // Initialize elements
    title.classList.add('opacity-0');
    cards.forEach(card => {
        card.classList.add('opacity-0');
    });

    // Observe the entire skills section
    sectionObserver.observe(skillsSection);
});

/// Intersection Observer for Power Platform Section ///
document.addEventListener('DOMContentLoaded', () => {
    const powerPlatformSection = document.querySelector('section:first-of-type');
    const powerPlatformTitle = powerPlatformSection.querySelector('h2');
    const powerPlatformDesc = powerPlatformSection.querySelector('p');
    const powerPlatformCards = powerPlatformSection.querySelectorAll('.cardsToDisplay');
    const backToTopButton = document.querySelector('.back-to-top');

    const appearOptions = {
        threshold: 0.1, // Lower threshold for earlier trigger
        rootMargin: "50px" // Add margin to pre-load animation
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add small delay to ensure smooth animation
                setTimeout(() => {
                    entry.target.classList.add('animate-fadeInSlideUp');
                }, 50);
                observer.unobserve(entry.target); // Only animate once

                // Show back to top button when Power Platform section is visible
                if (entry.target === powerPlatformSection) {
                    backToTopButton.classList.remove('hidden');
                }
            }
        });
    }, appearOptions);

    // Initialize elements
    [powerPlatformTitle, powerPlatformDesc, ...powerPlatformCards].forEach(el => {
        if (!el.classList.contains('opacity-0')) {
            el.classList.add('opacity-0');
        }
        appearOnScroll.observe(el);
    });

    // Observe the section itself for back-to-top button
    appearOnScroll.observe(powerPlatformSection);
});

/// Back to Top Button Visibility ///
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.querySelector('.back-to-top');
    const headerContainer = document.querySelector('#headerContainer');

    const buttonObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Show button when header is not in view
            if (!entry.isIntersecting) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });
    }, { threshold: 0.1 });

    buttonObserver.observe(headerContainer);

    // Handle margin adjustment on scroll to top
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        body.classList.add('mt-4', 'md:mt-10');
    });

    // Remove margin when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            body.classList.remove('mt-4', 'md:mt-10');
        } else {
            body.classList.add('mt-4', 'md:mt-10');
        }
    });
});

/// DarkMode ///

const toggleButton = document.getElementById('toggleDarkMode');
const body = document.querySelector('body');
const fullName = document.getElementById('fullName');
const skillCards = document.querySelectorAll('.skillCard'); // Keep this selector

// --- NEW: Function to handle Skill Card styling ---
function setSkillCardStyle(isDark) {
    skillCards.forEach(card => {
        const outerArticle = card.querySelector('article');
        const cardDiv = card.querySelector('div');
        const heading = card.querySelector('h3');
        const paragraph = card.querySelector('p');
        const svg = card.querySelector('svg');
        const tags = card.querySelectorAll('span.skill-tag');

        if (isDark) {
            // Apply dark mode styles
            outerArticle?.classList.remove('bg-blue-400');
            outerArticle?.classList.add('bg-blue-700');
            cardDiv?.classList.remove('bg-gradient-to-r', 'from-blue-50', 'to-blue-100');
            cardDiv?.classList.add('bg-gray-900');
            heading?.classList.remove('text-gray-900');
            heading?.classList.add('text-blue-600');
            paragraph?.classList.remove('text-gray-600');
            paragraph?.classList.add('text-gray-400');
            svg?.classList.remove('text-blue-600');
            svg?.classList.add('text-blue-300');
            tags.forEach(span => {
                span.classList.remove('bg-blue-100', 'text-blue-700');
                span.classList.add('bg-blue-600', 'text-blue-200');
            });
        } else {
            // Apply light mode styles
            outerArticle?.classList.remove('bg-blue-700');
            outerArticle?.classList.add('bg-blue-400');
            cardDiv?.classList.remove('bg-gray-900');
            cardDiv?.classList.add('bg-gradient-to-r', 'from-blue-50', 'to-blue-100');
            heading?.classList.remove('text-blue-600');
            heading?.classList.add('text-gray-900');
            paragraph?.classList.remove('text-gray-400');
            paragraph?.classList.add('text-gray-600');
            svg?.classList.remove('text-blue-300');
            svg?.classList.add('text-blue-600');
            tags.forEach(span => {
                span.classList.remove('bg-blue-600', 'text-blue-200');
                span.classList.add('bg-blue-100', 'text-blue-700');
            });
        }
    });
}
// --- End of new function ---

// Function to handle Power Platform section styling
function setPowerPlatformStyle(isDark) {
    const powerPlatformTitle = document.querySelector('section:first-of-type h2');
    const powerPlatformDesc = document.querySelector('section:first-of-type p');

    // Preserve opacity and animation classes while updating colors
    const currentTitleClasses = powerPlatformTitle.classList.toString();
    const currentDescClasses = powerPlatformDesc.classList.toString();

    // Keep animation and opacity classes if they exist
    const keepClasses = ['opacity-0', 'animate-fadeInSlideUp'];
    const titleKeepClasses = keepClasses.filter(c => currentTitleClasses.includes(c));
    const descKeepClasses = keepClasses.filter(c => currentDescClasses.includes(c));

    // Reset and set classes while preserving animations
    powerPlatformTitle.className = `text-4xl font-montserrat font-bold mb-6 text-center ${titleKeepClasses.join(' ')}`;
    powerPlatformDesc.className = `text-lg max-w-3xl mx-auto text-center mb-12 ${descKeepClasses.join(' ')}`;

    // Add appropriate text color
    powerPlatformTitle.classList.add(isDark ? 'text-[#9b4f96]' : 'text-[#742774]');
    powerPlatformDesc.classList.add(isDark ? 'text-gray-400' : 'text-[#742774]/80');

    // Cards styling
    const baseClasses = {
        container: 'rounded-xl p-4 shadow-lg border',
        innerDiv: 'flex items-start gap-4',
        icon: 'bg-transparent shrink-0',
        heading: 'font-medium',
        paragraph: 'text-sm mt-1',
        span: 'rounded-full px-2.5 py-0.5 text-xs transition-colors'
    };

    const themeClasses = isDark ? {
        container: 'bg-gray-900 border-gray-700',
        icon: 'text-[#ff69b4]',
        heading: 'text-[#9b4f96]',
        paragraph: 'text-gray-400',
        span: 'bg-[#ff69b4]/20 text-white hover:bg-[#742774]/20'
    } : {
        container: 'bg-[#fdf2f8]/90 border-[#742774]/10', // 90% opacity pink background
        icon: 'text-[#742774]',
        heading: 'text-[#742774]',
        paragraph: 'text-[#742774]/70',
        span: 'bg-[#742774]/10 text-[#742774] hover:bg-[#742774]/20'
    };

    document.querySelectorAll('.power-platform-card > div').forEach(card => {
        // Remove all potential background classes first
        card.classList.remove('bg-white', 'bg-gray-900', 'bg-[#fdf2f8]');

        card.className = `${baseClasses.container} ${themeClasses.container}`;

        const innerDiv = card.querySelector('.flex');
        innerDiv.className = baseClasses.innerDiv;

        const icon = card.querySelector('svg').parentElement;
        icon.className = `${baseClasses.icon} ${themeClasses.icon}`;

        const heading = card.querySelector('h3');
        heading.className = `${baseClasses.heading} ${themeClasses.heading}`;

        const paragraph = card.querySelector('p');
        paragraph.className = `${baseClasses.paragraph} ${themeClasses.paragraph}`;

        card.querySelectorAll('span').forEach(span => {
            span.className = `${baseClasses.span} ${themeClasses.span}`;
        });
    });
}

// Set initial state
document.addEventListener('DOMContentLoaded', () => {
    setPowerPlatformStyle(false); // Set light mode by default for Power Platform
    setSkillCardStyle(false); // <<< ADD THIS LINE: Set light mode for Skill Cards
});

// Toggle button handler
toggleButton.addEventListener('click', () => {
    // Toggle dark class on body
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');

    // Update Power Platform styles
    setPowerPlatformStyle(isDarkMode);
    // --- Update Skill Card Styles using the new function ---
    setSkillCardStyle(isDarkMode);

    // Update common elements
    toggleButton.setAttribute('src', isDarkMode ? 'media/bright.svg' : 'media/dark.webp');

    // --- Skill Title Styling Logic ---
    const skillSectionTitle = document.querySelector('#skills h2');
    if (isDarkMode) {
        fullName.classList.remove('text-slate-700');
        body.classList.add('container', 'mx-auto', 'mt-4', 'md:mt-10', 'font-sans');
        body.classList.remove('bg-gradient-to-r', 'from-blue-50', 'to-blue-100', 'md:from-white', 'md:to-blue-400');
        body.classList.add('bg-gradient-to-r', 'from-slate-900', 'to-black', 'text-[#0a66c2]');
        skillSectionTitle.classList.remove('text-gray-800');
        skillSectionTitle.classList.add('text-white');

    } else {
        fullName.classList.add('text-slate-700');
        body.classList.add('container', 'mx-auto', 'mt-4', 'md:mt-10', 'font-sans');
        body.classList.remove('bg-gradient-to-r', 'from-slate-900', 'to-black', 'text-[#0a66c2]');
        body.classList.add('bg-gradient-to-r', 'from-blue-50', 'to-blue-100', 'md:from-white', 'md:to-blue-400');
        skillSectionTitle.classList.remove('text-white');
        skillSectionTitle.classList.add('text-gray-800');
    }
    // --- End of Skill Title Styling Logic ---

    // --- Update "Skills" Section Heading ---
    if (isDarkMode) {
        skillSectionTitle.classList.remove('text-black');
        skillSectionTitle.classList.add('text-blue-300');
    } else {
        skillSectionTitle.classList.remove('text-blue-300');
        skillSectionTitle.classList.add('text-black');
    }

    // --- Update "Get in Touch" Section Heading ---
    const getInTouchTitle = document.querySelector('footer h2');
    if (isDarkMode) {
        getInTouchTitle.classList.remove('text-black');
        getInTouchTitle.classList.add('text-blue-300');
    } else {
        getInTouchTitle.classList.remove('text-blue-300');
        getInTouchTitle.classList.add('text-black');
    }

    // --- Update "Have a question?" Text ---
    const haveAQuestionText = document.querySelector('footer p');
    if (isDarkMode) {
        haveAQuestionText.classList.remove('text-black');
        haveAQuestionText.classList.add('text-gray-400');
    } else {
        haveAQuestionText.classList.remove('text-gray-400');
        haveAQuestionText.classList.add('text-black');
    }

    // Contact section (Keep handling via JS or add dark: variants in HTML)
    // ... (rest of contact/dialog styling logic remains the same) ...
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