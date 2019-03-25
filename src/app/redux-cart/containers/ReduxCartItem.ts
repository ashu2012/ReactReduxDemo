
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import CartItem from "../components/ReduxCartItem";
import * as actions from "../state/actions";

 
const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, 
                    mapDispatchToProps) (CartItem)