import { BuildOptions } from './types/config';
import {RuleSetRule} from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {

    const {isDev} = options

    const typescriptLoadrer = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

      const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
                modules: true,
            },
          },
          "sass-loader",
        ],
      }

    return [
        typescriptLoadrer,
        sassLoader,
      ]
}