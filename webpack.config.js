const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'), 
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: "babel-loader",
              options: {
                configFile: "./babel.config.js",
                cacheDirectory: true
              }
            }
          ]
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin(),
    ],
    mode: 'development',
    devServer: {
      publicPath: '/dist',
      contentBase: path.join(__dirname, 'dist'),
      hot: true,
    },
    devtool: "source-map"
  },
  {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'docs'), 
      filename: 'bundle.js',
      publicPath: './'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: "babel-loader",
              options: {
                configFile: "./babel.config.js",
                cacheDirectory: true
              }
            }
          ]
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin(),
    ],
  }
];
