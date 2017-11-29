const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:__dirname + '/src/js/index.js',
	output:{
		path:__dirname + '/built',
		filename:'index.js'
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
    	new ExtractTextPlugin('[name].css'),
    	new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template: 'src/view/index.html'
	    }),
    ]
}