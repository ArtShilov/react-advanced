import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
    WebpackPluginInstance, ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin,
} from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export const buildPlugin = ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] => {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),

    ];

    if (isDev) {
        plugins.push(
            new ReactRefreshWebpackPlugin(),
            new HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        );
    }

    return plugins;
};
