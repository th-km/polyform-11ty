const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

const production = {
    plugins: [
        tailwindcss('./tailwind.js'),
        autoprefixer(),
        purgecss({
            content: ['./**/*.html']
        })
    ]
}

const dev = {
    plugins: [tailwindcss('./tailwind.js'), autoprefixer()]
}

const config = {
    production,
    dev
}

if (process.env.NODE_ENV === 'production') {
    module.exports = config.production
} else {
    module.exports = config.dev
}
