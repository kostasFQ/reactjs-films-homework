const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.config.js');
const ASSET_PATH = process.env.ASSET_PATH || '../';

module.exports = merge(common, {
  entry: {
    main: './src/index.jsx'
  },
  output: {
    publicPath: ASSET_PATH
  },
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true 
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
              sourcemap: true
            }
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: "sass-loader", 
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
})