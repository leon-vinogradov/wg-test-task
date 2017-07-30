var path = require('path')

module.exports = {
  entry: {
    'react': './src/frontend/react/app.jsx',
    'vue': './src/frontend/vue/app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build-[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ["env"]
        },
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        options: {
          presets: ["es2015", "react"]
        },
      }
    ]
  }
};
