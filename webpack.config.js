const path = require('path')

module.exports = {
//   mode: 'none',
  context: path.resolve(__dirname, 'src'),
  // entry: './index.js',
  entry: {
    main: './modules/index.js',
    admin: './admin_modules/index.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true,
    static: {
      directory: './dist',
      watch: true
    }
  }
}
