module.exports = function (eleventyConfig) {

  // Do not delete we need this in: site/_data/permalink.js
  eleventyConfig.addFilter("replaceEmptyWithIndex", function(value) {
    return !value || value === "" ? "index" : value
  })

  eleventyConfig.addLayoutAlias("main", "layouts/main.njk")

  return {
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  }
}
