import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ProductList from "../components/ProductList";
import * as actions from "../state/actions";
import {addProductToCart} from "../../redux-cart/state/actions";
 
const mapStateToProps = (state: any) => {
    return {
         products: state.productState.products,
         loading: state.productState.loading,
         error: state.productState.error
    }
}

const mapDispatchToProps = (dispatch : any) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        addItemToCart: bindActionCreators(addProductToCart, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductList)