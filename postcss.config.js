const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || []
    }
}

const production = {
    plugins: [
        tailwindcss('./tailwind.js'),
        autoprefixer(),
        purgecss({
            content: ['./**/*.html'],
            whitelistPatterns: [/^js-is-/],
            extractors: [
                {
                    extractor: TailwindExtractor,
                    extensions: ['html', 'js']
                }
            ]
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
