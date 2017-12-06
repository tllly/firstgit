const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('css/[name].css');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// context:process.cwd(),
	entry:{
		index:'./src/js/entry/index.js',
		action:'./src/js/entry/action.js',
		v:['jquery']
	},
	output:{
		path:__dirname + '/built/',
		// publicPath:'/built/',
		filename:'js/[name].[hash:8].js'
	},
	module: {
        rules: [
	        {
	            test: /\.less$/,
	            use: extractCSS.extract({
		          	fallback: "style-loader",
		          	use: "css-loader!less-loader",
				    publicPath: '../'
		        })
	        },
	        {
	          test: /\.(png|jpg|gif)$/,
	          loader: 'url-loader?limit=8192&name=images/[name].[ext]?[hash]',
	        }
        ]
    },
    plugins:[
    	new webpack.HotModuleReplacementPlugin(),
    	extractCSS,
    	new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template:'inline-html-withimg-loader!' + path.resolve(__dirname, 'src/index.html'),
	      chunks: ['v','index']
	    }),
	    new webpack.ProvidePlugin({
	    	$:'jquery'
	    }),
	    // new webpack.optimize.CommonsChunkPlugin({names:['v']}),

	    new HtmlWebpackPlugin({
	      filename: 'view/about/index.html',
	      template:'inline-html-withimg-loader!' + path.resolve(__dirname, 'src/view/about/about.html')  ,
	      chunks: ['v','action']
	    }),
    ],
 //    resolve: {
	//     alias: {
	//           'assets': resolve('built/iamges')
	//     }
	// },
    devServer:{
        contentBase: "./built",
        open : true,
	    historyApiFallback:true,
	    port:8888,
	    inline:true,
	    hot:true
	},
	// watch:true
}