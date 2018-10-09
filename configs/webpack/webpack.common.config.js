const path = require('path');

const cssLoader = mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader';


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
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            cssLoader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new StyleLintPlugin({ fix: true })
  ]
}