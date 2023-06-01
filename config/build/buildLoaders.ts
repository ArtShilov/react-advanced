import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import buildSCSSLoader from './loaders/buildSCSSLoader';
import buildSVGLoader from './loaders/buildSVGLoader';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const svgLoader = buildSVGLoader(/\.[jt]sx?$/);
    const sassLoader = buildSCSSLoader(isDev);

    const babelLoader = {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const typescriptLoadrer = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typescriptLoadrer,
        sassLoader,
    ];
};
