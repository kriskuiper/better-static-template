const isProduction = process.env.ELEVENTY_ENV === 'production'

module.exports = {
  input: 'src/site/assets/js/main.js',
  output: {
    file: 'dist/scripts/bundle.js',
    format: 'iife',
    plugins: [
      require('@rollup/plugin-node-resolve'),
      require('@rollup/plugin-commonjs'),
      require('@rollup/plugin-babel'),
      isProduction && require('rollup-plugin-terser').terser()
    ]
  }
}