import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('empty state 1', () => {
        const state: CounterSchema = { value: undefined };

        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 1 });
    });
    test('empty state 2', () => {
        const state: CounterSchema = { value: null };

        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 1 });
    });
});
