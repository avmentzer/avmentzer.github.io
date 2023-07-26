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
        }, i * 60);
    })
})

///DarkMode ///
const toggleButton = document.getElementById('toggleDarkMode')
const body = document.querySelector('body')

toggleButton.addEventListener('click', () => {
    const brightMode = 'container mx-auto mt-10 font-sans bg-gradient-to-r from-white to-blue-200'
    const darkMode = 'container mx-auto mt-10 font-sans bg-slate-900 text-white dark'
    if (body.classList.contains('dark')) {
        body.classList = brightMode
        toggleButton.setAttribute('src', 'media/dark.png')
    } else {
        body.classList = darkMode
        toggleButton.setAttribute('src', 'media/bright.svg')
    }
})