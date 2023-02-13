const { merge } = require('webpack-merge');
const webpCommonConfig = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

console.log('check', webpCommonConfig)

// Dev config
const webpDevConfig = {
	mode: 'development'
};

// Add browserstack for dev testing 
const webpCommonConfig2 = {
	plugins: []
}
webpCommonConfig2.plugins.push(
	new BrowserSyncPlugin({
		host: 'localhost',
		port: 3333,
		files: ['wp-content/themes/**/*.php', 'wp-content/themes/**/*.html'],
		proxy: 'http://localhost/wordpress'
	})
);

module.exports = [merge(webpCommonConfig[0], webpDevConfig, webpCommonConfig2), merge(webpCommonConfig[1], webpDevConfig, webpCommonConfig2)];