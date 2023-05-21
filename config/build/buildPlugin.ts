import { BuildOptions } from './types/config';
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from "webpack"

export const buildPlugin = ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ]
}