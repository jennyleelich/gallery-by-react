var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: "json" },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel',query: {
          presets: ['es2015','react']
        } },
      { test: /\.css$/, loader: 'style!css?postcss' },
    {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
    {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=8192'
    }
      
    ]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot:true
  }
}
          