module.exports = {
	entry:__dirname + '/src/js/index.js',
	output:{
		path:__dirname + '/built',
		filename:'index.js'
	},
	module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
        }]
    }
}