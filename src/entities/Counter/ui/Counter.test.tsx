import { screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import Counter from './Counter';

describe('Counter', () => {
    const initialState = {
        counter: {
            value: 10,
        },
    };

    test('Test render', () => {
        componentRender(<Counter />, {
            initialState,
        });
        const buttonIncrement = screen.getByTestId('button-increment');
        const buttonDecrement = screen.getByTestId('button-decrement');
        const title = screen.getByTestId('value-title');

        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('10');

        expect(buttonIncrement).toBeInTheDocument();
        expect(buttonDecrement).toBeInTheDocument();
    });

    test('Test button increment', () => {
        componentRender(<Counter />, {
            initialState,
        });
        const buttonIncrement = screen.getByTestId('button-increment');
        const title = screen.getByTestId('value-title');

        userEvent.click(buttonIncrement);

        expect(title).toHaveTextContent('11');
    });

    test('Test button decrement', () => {
        componentRender(<Counter />, {
            initialState,
        });

        const buttonDecrement = screen.getByTestId('button-decrement');
        const title = screen.getByTestId('value-title');

        userEvent.click(buttonDecrement);
        expect(title).toHaveTextContent('9');
    });
});
