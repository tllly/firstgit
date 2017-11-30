const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// context:process.cwd(),
	entry:{
		index:'./src/js/index.js',
		about:'./src/js/action.js'
	},
	output:{
		path:__dirname + '/built/js',
		publicPath:'./',
		filename:'[name].js'
	},
	module: {
        rules: [
	        {
	            test: /\.less$/,
	            use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader!less-loader"
		        })
	        }
        ]
    },
    plugins:[
    	new webpack.HotModuleReplacementPlugin(),
    	new ExtractTextPlugin('[name].css'),
    	new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template: 'src/view/index.html'
	    }),
	    new HtmlWebpackPlugin({
	      filename: 'about/index.html',
	      template: 'src/view/about.html'
	    }),
    ],
    devServer:{
        contentBase: "./built",
        open : true,
	    historyApiFallback:true,
	    port:8888,
	    inline:true,
	    hot:true
	}   
}