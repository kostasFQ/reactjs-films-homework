const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')


module.exports = {
  
  output: {
    path: path.join(__dirname, '../../build'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js','.jsx']
  },

  target: 'web',
  devtool: '#source-map',
  module: {
    rules: [
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '../',
            context: 'src/',
            emitFile: true,
            name: 'imgs/[name].[ext]',
          },
        },
      ],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    }),
  ]
}