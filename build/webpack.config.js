const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.lib')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

let config = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'react-tabllist.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

module.exports = merge(baseConfig, config)
