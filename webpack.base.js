const path = require('path');
const webpack = require('webpack');
const postcssConfig = require('./postcssConfig');
const babelConfig = require('./babelConfig');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pageItems = require('./src/index');

const entrys = {};
const plugins = [
    new ExtractTextPlugin({
        filename: '[name].css',
        disable: false,
        allChunks: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: "commons",
        filename: "commons.js",
    })
];
pageItems.forEach((item) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${item.file}.html`,
        template: path.resolve(__dirname,"src",'page',`${item.file}.js`),
        title: item.title,
        hash: true,
        xhtml: true,
        chunks: ['commons',`${item.file}`]
    });

    entrys[item.file] = path.resolve(__dirname, 'src','entrys',`${item.file}.js`);
    plugins.push(htmlPlugin);
});

module.exports = {
    devtool: 'source-map',
    entry: entrys,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        // publicPath: 'assest'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: true
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: Object.assign(
                                {},
                                postcssConfig,
                                {
                                    sourceMap: true,
                                }
                            ),
                        },
                    ],
                }),
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: true
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: Object.assign(
                                {},
                                postcssConfig,
                                {
                                    sourceMap: true,
                                }
                            ),
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                }),
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: babelConfig,
            },
            {
                test: /\.pug?$/,
                loader: 'pug-loader'
            }
        ]
    },
    plugins: plugins
};