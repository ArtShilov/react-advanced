import { render, screen } from '@testing-library/react';
import Button, { ButtonSize, ButtonTheme } from './Button';

describe('Button', () => {
    const buttonText = 'Button Te@st';

    test('Test render', () => {
        render(<Button>{buttonText}</Button>);
        expect(screen.getByText(buttonText)).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>{buttonText}</Button>);
        expect(screen.getByText(buttonText)).toHaveClass('clear');
    });
    test('Test outline theme', () => {
        render(<Button theme={ButtonTheme.OUTLINE}>{buttonText}</Button>);
        expect(screen.getByText(buttonText)).toHaveClass('outline');
    });
    test('Test background theme', () => {
        render(<Button theme={ButtonTheme.BACKGROUND}>{buttonText}</Button>);
        expect(screen.getByText(buttonText)).toHaveClass('background');
    });
    test('Test backgroundInverted theme', () => {
        render(<Button theme={ButtonTheme.BACKGROUND_INVERTED}>{buttonText}</Button>);
        expect(screen.getByText(buttonText)).toHaveClass('backgroundInverted');
    });

    test('Test isSquare', () => {
        render(<Button isSquare>{buttonText}</Button>);
        expect(screen.getByText(buttonText)).toHaveClass('isSquare');
    });
    test('Test size m', () => {
        render(<Button size={ButtonSize.M}>{buttonText}</Button>);
        expect(screen.getByText(buttonText)).toHaveClass('size_m');
    });
    test('Test size l', () => {
        render(<Button size={ButtonSize.L}>{buttonText}</Button>);
        expect(screen.getByText(buttonText)).toHaveClass('size_l');
    });
    test('Test size xl', () => {
        render(<Button size={ButtonSize.XL}>{buttonText}</Button>);
        expect(screen.getByText(buttonText)).toHaveClass('size_xl');
    });
});
