// app/components/FuncCounter.tsx

import React, {Component} from 'react'; 

type Function0 = ()=>{};

 
interface FuncProps {
    counter: number;
    increment: any;
    decrement: any;
    reset: any;
};
   
function FuncCounter(props: FuncProps) {
        console.log('FuncCounter  called');
 

         return (
            <div>
                <h2>Counter</h2>

                <p>Counter is {props.counter} </p>

                <button onClick={props.increment}>
                    Incr + 1
                </button>

                <button onClick={props.decrement}>
                    Decr - 1
                </button>

                <button onClick={props.reset}>
                    Reset 
                </button>
 
                
            </div>
        );
}

export default FuncCounter;