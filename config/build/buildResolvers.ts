import { BuildOptions } from './types/config';
import { ResolveOptions } from "webpack"

export const buildResolvers = (options: BuildOptions): ResolveOptions => {

  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    preferAbsolute: true,
    alias: {},
  }
}