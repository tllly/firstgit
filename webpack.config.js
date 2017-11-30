const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('../css/[name].css');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// context:process.cwd(),
	entry:{
		index:'./src/js/index.js',
		v:['jquery']
	},
	output:{
		path:__dirname + '/built/',
		// publicPath:'./',
		filename:'js/[name].js'
	},
	module: {
        rules: [
	        {
	            test: /\.less$/,
	            use: extractCSS.extract({
		          fallback: "style-loader",
		          use: "css-loader!less-loader"
		        })
	        }
        ]
    },
    plugins:[
    	new webpack.HotModuleReplacementPlugin(),
    	extractCSS,
    	new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template: 'src/view/index.html'
	    }),
	    new webpack.ProvidePlugin({
	    	$:'jquery'
	    }),
	    new webpack.optimize.CommonsChunkPlugin({names:['v']}),
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
	},
	watch:true
}