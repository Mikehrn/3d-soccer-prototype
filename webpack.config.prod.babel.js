"use strict"

import CopyWebpackPlugin from "copy-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import UglifyJsPlugin from "uglifyjs-webpack-plugin"
import autoprefixer from "autoprefixer"
import path from "path"
import webpack from "webpack"

let INPUT  = `/src/`
let OUTPUT = `/prod/`

let plugins = [
  new HtmlWebpackPlugin({
    filename: __dirname + `${OUTPUT}index.html`,
    template: __dirname + `/${INPUT}html/index.ejs`,
    cache: true,
    hash: true,
    inject: 'body',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: false,
      minifyCSS: false,
      minifyURLs: false,
      removeScriptTypeAttributes: true
    }
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
  }),
  new webpack.optimize.UglifyJsPlugin({
    include: /\.min\.js$/,
    minimize: true
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
        loader: 'babel-loader',
        query: {
          
          comments: false,
          compact: true
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              url: false,
              modules: true,
              sourceMap: false,
              minimize: true,
              camelCase: true,
              importLoaders: 1,
              localIdentName: '[local]'
            }
          }, {
            loader: 'postcss-loader'
          },{
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }]
        })
      },
    ]
  },
  plugins: plugins
};

module.exports = config