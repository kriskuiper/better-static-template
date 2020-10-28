const htmlmin = require('html-minifier')

const isProduction = process.env.ELEVENTY_ENV === 'production'

module.exports = (eleventyConfig) => {
  isProduction && eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })

      return minified
    }

    return content
  })

  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      data: '_data',
      layouts: '_layouts',
      includes: '_includes'
    },
    templateFormats: ['html', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passThroughFileCopy: true
  }
}