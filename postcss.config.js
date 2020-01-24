module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [require('@fullhuman/postcss-purgecss')({
        content: [
          './docs/**/*.html',
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })]
      : [],
    require('cssnano')
  ]
};
