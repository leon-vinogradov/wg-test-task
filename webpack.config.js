const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'react': './src/frontend/react/app.jsx',
    'vue': './src/frontend/vue/app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build-[name].js'
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader?presets[]=env'
          }
        }
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
          presets: ["env", "react"]
        },
      }
    ]
  }
};
