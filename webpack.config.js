const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/init.js',
    resolve: { extensions: ['.js', '.jsx', '.json'] },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                options: {
                    presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
                },
            },
            {
                test: /\.(ttf|eot|svg|woff|png)$/,
                loader: 'file-loader',
            },
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader', 'sass-loader'],
            // },
        ],
    },
    infrastructureLogging: {
        colors: true,
    },
    stats: {
        errorDetails: true,
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ],
    devServer: {
        host: 'localhost',
        port: 3002,
        hot: true,
        historyApiFallback: true,
        magicHtml: true,
        static: path.resolve(__dirname, './dist'),
    },
};
