import classNames from './classNames';

describe('classNames', () => {
    const someClass = 'someClass';
    const mods = {
        scroolable: true,
        isHovered: true,
        isDisabled: false,
    };
    const additional = ['second, third'];

    const modsExpectedArray = ['scroolable', 'isHovered'];

    test('with first prop only', () => {
        expect(classNames(someClass)).toBe(someClass);
    });

    test('with additional class', () => {
        const expected = [someClass, ...additional].join(' ');
        expect(classNames(someClass, {}, additional)).toBe(expected);
    });

    test('with mods', () => {
        const expected = [someClass, ...modsExpectedArray].join(' ');
        expect(classNames(someClass, mods)).toBe(expected);
    });

    test('with three props', () => {
        const expected = [someClass, ...additional, ...modsExpectedArray].join(' ');
        expect(classNames(someClass, mods, additional)).toBe(expected);
    });
});
