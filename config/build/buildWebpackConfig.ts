import {Configuration} from "webpack"
import { BuildOptions } from "./types/config"
import { buildPlugin } from "./buildPlugin"
import { buildLoaders } from "./buildLoaders"
import { buildResolvers } from "./buildResolvers"
import { buildDevServer } from "./buildDevServer"

export const buildWebpackConfig = (options: BuildOptions): Configuration => {

  const {paths, mode, isDev} = options

    return {
      mode,
      entry: paths.entry,
      output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean: true,
      },
       plugins: buildPlugin(options),
        module: {
          rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined ,
        optimization: {
          runtimeChunk: 'single',
        },
      }
}