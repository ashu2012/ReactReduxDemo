// containers/FuncCounterContainer.ts
import {connect} from 'react-redux';

import FuncCounter from '../components/FuncCounter';
import * as actions from '../state/actions';

interface FuncStateProps {
    counter: number;
}

interface FuncDispatchProps {
    increment: any;
    decrement: any;
    reset: any;
};
   

// map redux state to react comp props
// who call this fn? container
// what is state param? state = store.getState()
// when it is called? called on 
// 1. very first when component created
// 2. called on every subscribe (dispatch)
// returns ? react props
function mapStateToProps(state: any): FuncStateProps {
    console.log("FuncCounter container mapStateToProps ", state);
    return {
        counter: state.counter
    }
}

// map redux dispatch to react props
// who calls this? container
// dispatch param? dispatch = store.dispatch
// when it is called?
// called on every component instance creation
// returns props those are functions
function mapDispatchToProps(dispatch: any): FuncDispatchProps {
    return {
        increment: () => {
            console.log('increment called by react comp');
            const action = actions.increment(1);
            dispatch(action);
        },
        decrement: function() {
            console.log('decrement called by react comp');
            const action = actions.decrement(0);
            dispatch(action);
        },
        reset: function() {
            console.log('reset called by react comp');
            const action = actions.reset();
            dispatch(action);
        }
    }
}

const Func = connect(mapStateToProps,
                     mapDispatchToProps);
// Container component, Smart Component
// Pure component
// where is store?
// store shall be passed from <Provider ..>
const FuncCounterContainer = Func(FuncCounter);

export default FuncCounterContainer;
