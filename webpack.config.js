const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: path.resolve('./loader-util.js'),
      //       options: {
      //         name: 'wn'
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.html$/,
        use: [
          'html-loader',
          {
            loader: path.resolve('./html-minify-loader.js'),
            options: {
              comments: false
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  }
}


