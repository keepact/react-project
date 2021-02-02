const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/webapp/app/index.tsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  happyPackMode: true
                }          
            },
            { 
              enforce: "pre", 
              test: /\.js$/, 
              loader: "source-map-loader",
              exclude: [
                path.join(process.cwd(), 'node_modules')
              ]      
            },
            {
              test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
              loader: 'file-loader',
              options: {
                digest: 'hex',
                hash: 'sha512',
                name: 'content/[hash].[ext]'
              }
            },
            {
              test: /\.(sa|sc|c)ss$/,
              use: [
                { loader: 'style-loader' },
                {
                  loader: 'dts-css-modules-loader',
                  options: {
                    namedExport: false,
                    banner: "// This file is generated automatically"
                  }
                },
                {
                  loader: 'css-loader'
                },
              ]
            }      
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
          template: path.resolve(__dirname, 'src', 'webapp', 'index.html'),
          filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}