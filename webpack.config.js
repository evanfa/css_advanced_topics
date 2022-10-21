const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //entry: ".src/index.js",
    //entry: path.resolver(__dirname, "src")
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "./dist"),
        },
        port: 8080,
        compress: true,
        liveReload: false,
        hot: true,
    },
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-react",
                            {
                                runtime: "automatic", //Add import React from 'react'
                            },
                        ],
                    ],
                },
            },

            { test: /\.css$/, use: ["style-loader", "css-loader"] },
        ],
    },
    //minify: production
    mode: "development",
};