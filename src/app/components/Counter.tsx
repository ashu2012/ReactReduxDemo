// app/components/Counter.tsx

import React, {Component} from 'react';

interface CounterProps {
    startValue: number;
};

interface CounterState {
    counter: number;
}

// React.Component === Component
// class component accept generics 
// first one is Props Type, second one is State  Type
class Counter extends Component<CounterProps, CounterState> {
    timer: any;
    // constructor receive props very first time
    constructor(props: CounterProps) {
        super(props); // MUST
        console.log('Counter object created', props);

        // react keyword
        // applicable for only class component
        // state is owned by this component
        // state is mutable, can be changed
        this.state = {
            // initialize state with props
            counter: props.startValue
        }
    }

    increment = () => {
        console.log("This is", this);
        //console.trace('callstack');
        console.log('increment called. before', this.state.counter);
        // BAD, should not modify the state directly
        // this.state.counter++; // BAD approach

        // GOOD
        // keyword
        // setState accept new state as input
        // setState merge/update the new state with existing state
        // setState trigger react to call render function
        // setState is async
        this.setState({
            // counter: this.state.counter++ // BAD
            counter: this.state.counter + 1 // GOOD
        });

        console.log('increment called. after', this.state.counter);
    }

    // creation cycle called before render
    componentWillMount() {
        console.log('Counter componentWillMount');
    }

    // creation cycle called after render
    componentDidMount() {
        console.log('Counter componentDidMount');

        this.timer = setInterval( ()=> {
            console.log("Timer called", this.state.counter);
            this.setState({
                counter: this.state.counter + 1
            })
        }, 5000);
    }

    // destruction lifecycle
    componentWillUnmount() {
        console.log('Counter componentWillUnmount');
        clearInterval(this.timer);
    }

    // => arrow operator
    // => fix this in lexical scope
    decrement = () => {
        console.log('decrement called. before', this.state.counter);
        // BAD, should not modify the state directly
        // this.state.counter++; // BAD approach

        // GOOD
        // keyword
        // setState accept new state as input
        // setState merge/update the new state with existing state
        // setState trigger react to call render function
        // setState is async
        this.setState({
            // counter: this.state.counter++ // BAD
            counter: this.state.counter - 1 // GOOD
        });

        console.log('decrement called. after', this.state.counter);
    }

    multiply = () => {
        console.log('multiply called. before', this.state.counter);

        const state: any = this.state;
        // UGLY, mutating state directly
        state.counter = state.counter * 2;

        //BAD
        // keyword, trigger react to call render method
        this.forceUpdate();

        console.log('this.state', this.state);
        console.log('multiply called. after', this.state.counter);

    }

    render() {
        // props is available as this.props
        // this.props is a keyword
        console.log('Counter render called', this.props);
        console.log("Counter state in render ", this.state);
        return (
            <div>
                <h2>Counter</h2>

                <p>Start value {this.props.startValue}</p>

                <p>Counter is {this.state.counter}</p>

                { this.state.counter % 2 == 0 && 
                    <p> Even number  {this.state.counter}</p>
                }

                {
                    this.state.counter % 2 == 0?
                      <p>number is Even</p> 
                      :
                      <p>number is odd</p>
                }

                <button onClick={this.increment}>
                    Incr + 1
                </button>

                <button onClick={this.decrement}>
                    Decr - 1
                </button>


                <button onClick={this.multiply}>
                    Mul * 2
                </button>
                
            </div>
        );
    }

}

export default Counter;