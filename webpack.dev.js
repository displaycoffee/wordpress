const { merge } = require('webpack-merge');
const webpCommonConfig = require('./webpack.common.js');

// Dev config
const webpDevConfig = {
	mode: 'development',
	devServer: {
		static: {
			directory: webpCommonConfig.output.path
		},
		compress: true,
		port: 3333
	}
};

// Determine if a proxy needs to be added (mostly for tieing into wamp server)
const addProxy = false;
if (addProxy) {
	webpDevConfig.devServer.proxy = {
		'/': {
			target: 'http://localhost/base',
			changeOrigin: true
		},
	};
}

module.exports = merge(webpCommonConfig, webpDevConfig);