// actions.ts

import * as ActionTypes from './action-types';
import {Action} from 'redux';
// action creators

export interface CounterAction extends Action<string> {
    payload: { value: number };
}

// es6
// multi-line function, needs return
export const increment = (value: number):CounterAction => {
    return {
        type: ActionTypes.INCREMENT,
        payload: {
            // value: value
            value: value
        }
    }
}

// es6, single line function, return object
export const decrement = (value: number):CounterAction => ({
    type: ActionTypes.DECREMENT,
    payload: {
        value
    }
})

export const reset = (): Action<string> => ({
    type: ActionTypes.RESET
});