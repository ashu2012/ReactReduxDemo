
import React from "react";
import PropTypes from "prop-types";

import ReduxCartItem from "../containers/ReduxCartItem";

export default function ReduxCartList(props: any) { 
    let {items} = props;

    console.log("CartList function render")

   return (
       <div> 
       <h2>Cart List</h2>
       <table>
           <thead>
               <tr>
                   <th>Name</th>
                   <th>Price</th>
                   <th>Qty</th>
                   <th> Total </th>
                   <th> Remove</th>
               </tr>
           </thead>
           <tbody>
           {/* comment */}
           
           {
               items.map ( (item: any) => (
                   <ReduxCartItem item={item}
                             key={item.id}

                   />
               ))
           }


           </tbody>
       </table>
       </div>
    )
} 


ReduxCartList.defaultProps = {
    
}

ReduxCartList.propTypes = {
    
}