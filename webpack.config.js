const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    mode: 'development',

    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'public')
    },

    watch: true,

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'eslint-loader',
                  options: {
                    fix: true
                  }
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('public', {
            exclude: ['images']
        }),
        new ExtractTextPlugin('index.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    resolve: {
        extensions: ['.js', '.json', '.jsx', '*'],
        modules: [
            path.resolve(__dirname + '/node_modules'),
            path.resolve(__dirname + '/src')
        ]
    }
}