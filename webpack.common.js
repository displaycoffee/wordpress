const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpConfig = {
	path : path.resolve(__dirname),
	src : {
		js : './assets/src/js/bundle.js',
		css : './assets/src/scss/styles.scss'
	},
	dist : {
		js : './assets/dist/js/bundle.js',
		css : './assets/dist/css/styles.css'	
	}	
};

module.exports = {
	entry: [webpConfig.src.js, webpConfig.src.css],
	output: {
		filename: webpConfig.dist.js,
		path: webpConfig.path
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: webpConfig.dist.css
		})
	],
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				],
			},
		],
	}	
};