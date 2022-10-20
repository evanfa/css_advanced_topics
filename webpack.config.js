const path = require("path");

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
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-react"],
            },
        }, ],
    },
    //minify: production
    mode: "development",
};