const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    mode: "development",
    resolve: {
        extensions: [".ts",".js"]
    },
    entry: {
        bundle: path.resolve(__dirname, "src/index.ts")
    }, 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        assetModuleFilename: "[name][ext]"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    },
    optimization: {
        minimize: true,
        usedExports: true,
        mangleExports: "deterministic"
    }
}