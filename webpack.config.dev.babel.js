"use strict"

import BrowserSyncPlugin from "browser-sync-webpack-plugin"
import CopyWebpackPlugin from "copy-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import autoprefixer from "autoprefixer"
import path from "path"
import webpack from "webpack"

let INPUT  = `/src/`
let OUTPUT = `/dev/`

let plugins = [
  new HtmlWebpackPlugin({
    filename: __dirname + `${OUTPUT}index.html`,
    template: __dirname + `/${INPUT}html/index.ejs`
  }),
  new CopyWebpackPlugin([{
    from: __dirname + `/${INPUT}img/`,
    to: __dirname + `/${OUTPUT}assets/img/`
  }]),
  new CopyWebpackPlugin([{
    from: __dirname + `/${INPUT}model/`,
    to: __dirname + `/${OUTPUT}assets/model/`
  }]),
  new ExtractTextPlugin({
    filename:  'css/bundle.css',
    disable: false,
    allChunks: true
  })
]

const config = {
  entry: [
    path.resolve(__dirname, `./${INPUT}js/app.js`),
    path.resolve(__dirname, `./${INPUT}scss/app.scss`),
  ],
  output: {
    path: path.resolve(__dirname, `./${OUTPUT}assets/`),
    filename: 'js/bundle.js'
  }, 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              url: false,
              modules: false,
              sourceMap: false,
              minimize: false
            }
          }, {
            loader: 'postcss-loader'
          },{
            loader: 'sass-loader'
          }]
        })
      }
    ]
  },
  plugins: plugins
};

module.exports = config