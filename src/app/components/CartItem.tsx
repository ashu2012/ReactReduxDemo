// CartItem.tsx
import React, {PureComponent} from "react";
import { CartDataItem } from "../models/CartDataItem";

interface CartItemProps {
    item: CartDataItem;
    removeItem: Function;
    updateItem: Function;
    //todo: removeItem and updateItem
}

interface CartItemState {
    qty: number;
}

export default class CartItem extends PureComponent<CartItemProps,CartItemState>  {
    constructor(props: CartItemProps) {
        super(props);

        //TODO: assing from props
        this.state = {
            qty: props.item.qty
        }
    }

    //TODO: Ref
    // access to real dom element located inside this component

    //TODO: componentWillMount
    //TODO: state from props, qty


    inputElement: any;
    spanElem: any;

    setInputElement = (inputElement: any) => {
        console.log('setInputElement called thorugh ref');
        // inputElement is a REAL DOM <input ..>
        this.inputElement = inputElement;
    }


    componentDidMount() {
        console.log('CartItem componentDidMount');
        this.inputElement.focus();
        this.spanElem.textContent = 'free shipping!!';
    }

    onQtyChange = (e: any) => {
        const value = e.target.value;

        this.setState({
            qty: parseInt(value) || 0
        })
    }
   
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name} - {this.context.theme}</td>
                <td>{item.price}</td>
                <td>
                     <input 
                            value={this.state.qty}
                            type="number"
                            onChange = {this.onQtyChange}
                            ref= {this.setInputElement}
                     />
                </td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => this.props.updateItem(item.id, this.state.qty) }>
                        Update
                </button>    
                <button onClick={() => this.props.removeItem(item.id)}>
                        Delete
                </button>
                <span ref={ (spanElem) => this.spanElem = spanElem}>
                </span>
                </td>
            </tr>
        )
    }
} 

