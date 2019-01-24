const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

<<<<<<< HEAD
=======
class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || []
    }
}

>>>>>>> develop
const production = {
    plugins: [
        tailwindcss('./tailwind.js'),
        autoprefixer(),
        purgecss({
<<<<<<< HEAD
            content: ['./**/*.html']
=======
            content: ['./**/*.html'],
            extractors: [
                {
                    extractor: TailwindExtractor,
                    extensions: ['html', 'js']
                }
            ]
>>>>>>> develop
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
