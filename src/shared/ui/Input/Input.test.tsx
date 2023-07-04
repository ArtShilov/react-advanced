import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
    const inputPlaceholder = 'Input placeholder';
    const inputValue = 'Input value';

    test('Test render with placeholder', () => {
        render(<Input placeholder={inputPlaceholder} />);
        expect(screen.getByPlaceholderText(inputPlaceholder)).toBeInTheDocument();
    });

    test('Test render with value', () => {
        render(<Input defaultValue={inputValue} readOnly />);
        expect(screen.getByDisplayValue(inputValue)).toBeInTheDocument();
    });

    test('Test onChangeValue', () => {
        render(<Input placeholder={inputPlaceholder} />);

        fireEvent.change(screen.getByPlaceholderText(inputPlaceholder), {
            target: { value: inputValue },
        });
        expect(screen.getByDisplayValue(inputValue)).toBeInTheDocument();
    });
});
