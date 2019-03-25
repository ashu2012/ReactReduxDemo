// counterReducer.ts

import * as ActionTypes  from '../action-types';

import {CounterAction} from '../actions';

const INITIAL_STATE = 0;

function counterReducer(state: number = INITIAL_STATE, 
                        action: CounterAction) : number {

    console.log('counterReducer called', state, action);

    switch(action.type) {
        case ActionTypes.INCREMENT:
            return state + action.payload.value;

        case ActionTypes.DECREMENT:
            return state - action.payload.value;

        case ActionTypes.RESET:
            return INITIAL_STATE;

        default:
            return state;
    }

}

export default counterReducer;