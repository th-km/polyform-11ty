// Accordions
// ——————————————————
const container = document.querySelector('.services')

const getHeight = (accordion, content) => {
    const inner = content.children[0]
    const height = accordion.classList.contains('is-open')
        ? 0
        : inner.getBoundingClientRect().height

    return height
}

const toggleAccordion = accordion => {
    accordion.classList.toggle('is-open')
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
        image.classList.remove('is-visible')
    })

    // Add class to the current image
    images[currentImage].classList.add('is-visible')
}

// Define interval
const startLoop = () => {
    interval = setInterval(loop, 350)
}

// Wait until all images are loaded and start the loop
window.addEventListener('load', () => {
    startLoop()
})

// Stop the loop
heroTag.addEventListener('mouseenter', () => {
    clearInterval(interval)
})

// Start again
heroTag.addEventListener('mouseleave', () => {
    startLoop()
})

// Generate date
// ——————————————————
const date = new Date().getFullYear()
document.querySelector('.date').innerHTML = `&copy; ${date}`

// Scroll down
// ——————————————————
const arrowTag = document.querySelector('.arrow')
const elementToScroll = document.querySelector('.content')

arrowTag.addEventListener('click', () => {
    elementToScroll.scrollIntoView({ behavior: 'smooth' })
})
