/// Typing animation fo headline ///

document.addEventListener('DOMContentLoaded', () => {
    const text = '`Passionate software developer. System admin at heart. WIFI Vienna graduate. Versatile programmer. Team player. Eager learner. IT enthusiast.`'
    const characters = text.split("")
    const headline = document.getElementById('headline')
    characters.forEach((character, i) => {
        setTimeout(() => {
            const span = document.createElement('span')
            span.textContent = character
            headline.appendChild(span)
        }, i * 80);
    })
})

///DarkMode ///

const toggleButton = document.getElementById('toggleDarkMode')
const body = document.querySelector('body')
const fullName = document.getElementById('fullName')

toggleButton.addEventListener('click', () => {
    const brightMode = 'container mx-auto md:mt-10 mt-5 font-sans bg-gradient-to-r from-white to-blue-200'
    const darkMode = 'container mx-auto md:mt-10 mt-5 font-sans bg-slate-900 text-[#0a66c2] dark'
    if (body.classList.contains('dark')) {
        body.classList = brightMode
        fullName.classList.add('text-slate-700')
        toggleButton.setAttribute('src', 'media/dark.png')
    } else {
        body.classList = darkMode
        fullName.classList.remove('text-slate-700')
        toggleButton.setAttribute('src', 'media/bright.svg')
    }
})

/// Projects/Skills ///

// Toggle Button //

const buttons = document.querySelectorAll('.mainOuterContainer button')
const sections = document.querySelectorAll('.mainOuterContainer section')

buttons.forEach((button) => {
    const toggleProjectsSkills = () => {
        if (button.classList.contains('bg-blue-400')) {
            return
        }
        buttons.forEach((btn) => {
            if (btn !== button) {
                btn.classList.remove('bg-blue-400');
            } else {
                sections.forEach((section) => {
                    if (section.classList.contains('hidden')) {
                        section.classList.remove('hidden')
                    } else {
                        section.classList.add('hidden')
                    }
                })
            }
        });
        button.classList.toggle('bg-blue-400');
    };
    button.addEventListener('click', toggleProjectsSkills);
});

// Contact Form //

const contactDiv = document.querySelector('.contact')
const contactDialog = document.querySelector('.contactDialog')
const closeDialogButton = document.querySelector('.closeDialogButton')

contactDiv.addEventListener('click', () => {
    contactDialog.showModal()
})

closeDialogButton.addEventListener('click', () => {
    contactDialog.close()
    window.document.reload()
})