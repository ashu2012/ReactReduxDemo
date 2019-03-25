// app/components/ReduxCounter.tsx

import React, {Component} from 'react';

// example code only, not for project

import configureStore from '../configureStore';
import * as actions from '../state/actions';

const store = configureStore();

interface CounterProps {
};
  
class ReduxCounter extends Component<CounterProps> {
    timer: any;
    // constructor receive props very first time
    constructor(props: CounterProps) {
        super(props); // MUST
        console.log('ReduxCounter object created', props);

    }

    increment = () => {
         const action = actions.increment(1);
         console.log('state before', store.getState());
         console.log('dispatching action', action);
         store.dispatch(action); // this shall call reducer, update store
         console.log('state after', store.getState());
    }

    unsubscribe: any;
 
    // creation cycle called after render
    componentDidMount() {
        console.log('ReduxCounter componentDidMount');

         this.unsubscribe = store.subscribe( () => {
             console.log('ReduxCounter susbcribe');
             this.forceUpdate();
         })
    }

    // destruction lifecycle
    componentWillUnmount() {
        console.log('ReduxCounter componentWillUnmount');
         this.unsubscribe();
    }

 
    decrement = () => {
    }
    
    
    reset = () => {
        
    }
 
    render() {
        console.log('ReduxCounter render called');

        const state = store.getState();

         return (
            <div>
                <h2>Counter</h2>

                <p>Counter is {state.counter} </p>

                <button onClick={this.increment}>
                    Incr + 1
                </button>

                <button onClick={this.decrement}>
                    Decr - 1
                </button>

                <button onClick={this.reset}>
                    Reset 
                </button>
 
                
            </div>
        );
    }

}

export default ReduxCounter;