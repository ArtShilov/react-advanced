type Mods = Record<string, string | boolean>;

const classNames = (
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string => [
    cls,
    ...additional,
    ...Object.entries(mods)
        .filter(([_className, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ');

export default classNames;
