
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ReduxCart from "../components/ReduxCart";
import * as actions from "../state/actions";
 

// called only once per instance
export const mapDispatchToProps = (dispatch: any) => {
    return {
       
        actions: bindActionCreators(actions, dispatch),
 
        addItem: function () {
            let id = Math.ceil(Math.random() * 100000);
            let item = {
                id, // syntatic sugar id: id
                name: `Product ${id}`,
                price:  100,
                qty: 1
            }

            dispatch(actions.addItem(item));
        }
    }
}

export default connect(null, 
                    mapDispatchToProps) (ReduxCart)