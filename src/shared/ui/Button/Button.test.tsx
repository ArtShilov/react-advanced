import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from './Button';

describe('Button', () => {
    const buttonText = 'Button Te@st';

    test('Test render', () => {
        render(<Button>{buttonText}</Button>);
        expect(screen.getByText(buttonText)).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>{buttonText}</Button>);
        expect(screen.getByText(buttonText)).toHaveClass('clear');
    });
});
