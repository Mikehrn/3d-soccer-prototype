let autoprefixer = require('autoprefixer')

module.exports = {
  plugins: {
    autoprefixer: { browsers: ['last 2 versions', 'iOS >= 8'] },
    cssnano: {}
  }
}