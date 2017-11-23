const webpack = require('webpack');
const config = require('./webpack.base');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pushArr = [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new CleanWebpackPlugin(['dist'])
];
config.plugins = [
    ...config.plugins,
    ...pushArr
];
module.exports = config;
