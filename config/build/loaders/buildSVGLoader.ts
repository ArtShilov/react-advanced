interface IbuildSVGLoader {
    test: RegExp;
    use: string[],
    issuer?: RegExp,
}

export default function buildSVGLoader(issuer?: RegExp) {
    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    } as IbuildSVGLoader;

    if (issuer) {
        svgLoader.issuer = issuer;
    }

    return svgLoader;
}
