const path = require('path');

const config = require('./webpack.base');
const devServer = {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 7203
};
config.devServer = devServer;
module.exports = config;
