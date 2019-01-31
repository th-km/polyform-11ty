// Accordions
// ——————————————————
const container = document.querySelector('.services')

const getHeight = (accordion, content) => {
    const inner = content.children[0]
    const height = accordion.classList.contains('js-is-open')
        ? 0
        : inner.getBoundingClientRect().height

    return height
}

const toggleAccordion = accordion => {
    accordion.classList.toggle('js-is-open')
}

const updateHeight = (element, height) => {
    element.style.height = `${height}px`
}

container.addEventListener('click', e => {
    const header = e.target.closest('.accordion__header')
    if (!header) return

    const accordion = header.parentElement
    const content = header.nextElementSibling
    const height = getHeight(accordion, content)

    updateHeight(content, height)
    toggleAccordion(accordion)
})

// Slides
// ——————————————————
const heroTag = document.querySelector('.hero')
const images = document.querySelectorAll('img')

let currentImage = 0
let interval = 0

// Loop
const loop = () => {
    currentImage += 1
    if (currentImage > images.length - 1) {
        currentImage = 0
    }

    // Remove class
    images.forEach(image => {
        image.classList.remove('js-is-visible')
    })

    // Add class to the current image
    images[currentImage].classList.add('js-is-visible')
}

// Random
const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length)
    images[randomIndex].classList.add('js-is-random')
}

// Define interval
const startLoop = () => {
    interval = setInterval(loop, 150)
}

window.addEventListener('load', () => {
    randomImage()
})

// Stop the loop
heroTag.addEventListener('mouseenter', () => {
    startLoop()
})

// Start again
heroTag.addEventListener('mouseleave', () => {
    clearInterval(interval)
})

// Mobile touch
heroTag.addEventListener('touchstart', () => {
    startLoop()
})

heroTag.addEventListener('touchend', () => {
    clearInterval(interval)
})

// Generate date
// ——————————————————
const date = new Date().getFullYear()
document.querySelector('.date').innerHTML = `&copy; ${date}`
