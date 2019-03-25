
import React from "react";
import PropTypes from "prop-types";

import ReduxCartList from "../containers/ReduxCartList";
import ReduxCartSummary from "../containers/ReduxCartSummary";

function ReduxCart(props: any) { 
        return (
            <div> 
            <h2>Redux Cart</h2>

            <button onClick={ ()=> props.addItem()}>
              Add
            </button>

            {/* actions.empty is a bindactioncreator method */}
            <button onClick={ ()=> props.actions.empty()}>
              Empty
            </button>
 

            <ReduxCartList 
            />

            <ReduxCartSummary 
            />


            </div>
        )
} 

ReduxCart.defaultProps = {
    
}

ReduxCart.propTypes = {
    
}

export default ReduxCart;