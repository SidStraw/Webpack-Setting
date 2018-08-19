const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "eval-source-map", //用以在打包後檢視Code的封裝來源
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 4000
    },
    plugins: [ //插件設定，以陣列型態設定
        new miniCssExtractPlugin({ filename: "bundle.css" }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "html", "index.html"),
            filename: "index.html",
            title: "我是標題"
        })
    ],
    module: {
        rules: [ //模組使用的規則，以陣列來設定
            {
                test: /\.js$/, //執行條件，可用正規表達式設定
                use: { //設定執行動作
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader", miniCssExtractPlugin.loader, "css-loader", "sass-loader"
                ]
            },
            {
                test: /\.ejs$/,
                loader: "ejs-loader"
            }
        ]
    }

}