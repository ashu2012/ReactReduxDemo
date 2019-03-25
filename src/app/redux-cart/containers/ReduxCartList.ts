
import {connect} from "react-redux";

import CartList from "../components/ReduxCartList";

const mapStateToProps = (state: any) => {
    return {
         items: state.items // (.items from combineReducer/store.js)
    }
}
 

export default connect(mapStateToProps, 
                       null) (CartList)