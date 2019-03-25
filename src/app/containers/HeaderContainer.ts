// containers/HeaderContainer.ts
import {connect} from 'react-redux';

import Header from '../components/Header';
import * as actions from '../state/actions';

interface HeaderProps {
    counter: number;
}
 
function mapStateToProps(state: any): HeaderProps {
    console.log("Header container mapStateToProps ", state);
    return {
        counter: state.counter
    }
}
 

export default connect(mapStateToProps, null) (Header);
