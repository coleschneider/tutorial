// // development config
// const merge = require('webpack-merge');
const webpack = require('webpack');
// const commonConfig = require('./webpack.config.common');
// const path = require("path")
// module.exports = merge(commonConfig, {
//   mode: 'development',
 
  
  
//   entry: [
//     'react-hot-loader/patch', // activate HMR for React
//     'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
//     // bundle the client for webpack-dev-server and connect to the provided endpoint
//     // 'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
//     '.../src/index.js' // the entry point of our app
//   ],
//   output: {
//     publicPath: '/',
//   },
// //   publicPath: path.resolve(__dirname, '../dist'),

// //   devServer: {
// //     hot: true, // enable HMR on the server
// //   },
//   devtool: 'cheap-module-eval-source-map',
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(), // enable HMR globally
//     new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
//   ],
// });


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  mode: "development",
  entry:  [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/index.js', ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use:  [  'style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [ 
    new CleanWebpackPlugin('dist', {} ),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module 
    // new MiniCssExtractPlugin({
    //   filename: 'style.[contenthash].css',
    // }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ]
};
