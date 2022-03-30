const { merge } = require('webpack-merge');
const webpCommon = require('./webpack.common.js');

module.exports = merge(webpCommon, {
	mode: 'development',
	devServer: {
		static: {
		  directory: webpCommon.output.path
		},
		compress: true,
		port: 3333
	}	
});