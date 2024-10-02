// @ts-check

import path from "path"
import CopyPlugin from "copy-webpack-plugin"
import TerserPlugin from "terser-webpack-plugin"

export default {
    mode: "production",
    entry: {
        main: "./src/mygame.ts",
    },
    output: {
        path: path.resolve("./dist"),
        filename: "1-library.js",
        library: {
            name: "library",
            type: "var",
        },
        clean: true,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: /^\s*!/,
                    },
                },
            }),
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/scripts/2-input.js", to: "2-input.js" },
                { from: "src/scripts/3-context.js", to: "3-context.js" },
                { from: "src/scripts/4-output.js", to: "4-output.js" },
            ],
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
        ],
    },
}
