'use strict'

const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  
  
  resolve: {
    alias: {
      stylesPath: path.resolve(__dirname, '../src/styles/modules/')
    }
  },
  
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
	  
	  {
		  test: /\.css$/,
		  use: [
			'vue-style-loader',
			'css-loader'
		  ]
	  },
	  
	  {
		  test: /\.scss$/,
             use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default
				options: {
					data: '@import "~stylesPath/_vars.scss";',
					sourceMap: true
				}

            }]
	  },
	  
	  { 
		test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
		loader: 'url-loader?limit=100000' 
	  }
    ]
  },
  plugins: [
	new webpack.HotModuleReplacementPlugin(),
  new VueLoaderPlugin(),
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: 'index.html',
		inject: true
	})
  ]
}