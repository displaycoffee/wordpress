const { merge } = require('webpack-merge');
const webpCommon = require('./webpack.common.js');

module.exports = merge(webpCommon, {
	mode: 'production'
});