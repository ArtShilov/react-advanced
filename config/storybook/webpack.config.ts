import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import buildSCSSLoader from '../build/loaders/buildSCSSLoader';
import { BuildPaths } from '../build/types/config';
import buildSVGLoader from '../build/loaders/buildSVGLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    if (typeof config.resolve === 'object') {
        if ('modules' in config.resolve && Array.isArray(config.resolve.modules)) {
            config.resolve.modules.push(paths.src);
        }
        if ('extensions' in config.resolve && Array.isArray(config.resolve.extensions)) {
            config.resolve.extensions.push('.ts', '.tsx');
        }
    }

    if (typeof config.module === 'object') {
        if ('rules' in config.module && Array.isArray(config.module.rules)) {
            // eslint-disable-next-line no-param-reassign
            config.module.rules = config.module.rules.map((rule: RuleSetRule | '...') => {
                if (typeof rule === 'object' && /svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }

                return rule;
            });

            const svgLoader = buildSVGLoader();

            const scssLoader = buildSCSSLoader(true);

            config.module.rules.push(svgLoader, scssLoader);
        }
    }

    return config;
};
