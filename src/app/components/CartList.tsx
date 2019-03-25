// CartList.tsx

import React, {Component} from "react";

import CartItem from "./CartItem";
import { CartDataItem } from "../models/CartDataItem";

 //TODO: PureComponent
 interface CartListProps {
     items: CartDataItem[];
     removeItem: Function;
     updateItem: Function;
     //todo: removeItem, updateItem
 }

export default class CartList extends Component<CartListProps> {
    constructor(props: CartListProps) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    // called whenever parent render called on update cycle
    // called whenever this.setState on update cycle
    // not called on this.forceUpdate
    // return true -- calls the render
    // return false -- doesn't call the render
    shouldComponentUpdate(nextProps: CartListProps, 
                          nextState: any) {
        console.log('CartList shouldComponentUpdate');
        console.log('this.props', this.props);
        console.log('nextProps', nextProps);
        console.log("this.props.items !== nextProps.items",
                        this.props.items !== nextProps.items)
        return this.props.items !== nextProps.items;
    }
    
    render() {
        console.log("CartList Render");
        // let items = this.props.items;
        // deconstruct, es6 feature
        let {items} = this.props;

       

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }
                    
                    {
                        items.map(item => (
                                <CartItem item={item} 
                                          key={item.id}
                                          removeItem={this.props.removeItem}
                                          updateItem={this.props.updateItem}
                                />
                        ))
                    }

                </tbody>
            </table>
            </div>
        )
    }
} 