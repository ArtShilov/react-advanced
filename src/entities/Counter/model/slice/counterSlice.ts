import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: CounterSchema) => {
            const { value = initialState.value } = state;
            state.value = value ? value + 1 : 1;
        },
        decrement: (state: CounterSchema) => {
            const { value = initialState.value } = state;
            state.value = value ? value - 1 : -1;
        },
    },
});

export const { actions: counterActions, reducer: counterReducer } = counterSlice;
