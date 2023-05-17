import {RuleSetRule} from "webpack"

export const buildLoaders = (): RuleSetRule[] => {

    const typescriptLoadrer = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

      const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }

    return [
        typescriptLoadrer,
        sassLoader,
      ]
}