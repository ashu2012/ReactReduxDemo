// Cart.tsx

import React, {Component} from "react";

import CartList from "./CartList";
import CartSummary from "./CartSummary";
import { CartDataItem } from "../models/CartDataItem";

interface CartProps {
}

interface CartState {
    items: CartDataItem[];
    amount: number;
    count: number;
    flag: boolean;
}

export default class Cart extends Component<CartProps, CartState> {
    constructor(props: CartProps) {
        super(props);

        this.state = {
            items: [ 
            			new CartDataItem(1, 'P1', 100,  5)
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item: CartDataItem =  new CartDataItem(
             id,
             `Product ${id}`,
             Math.ceil(Math.random() * 100),
              1
        );

        //TODO:
        // UGLY
        //this.state.items.push(item); // mutating
        //let items = this.state.items;
        // items.push(item); // mutating directly

        // Immutable, Good
        const items = [...this.state.items, item];
        this.setState ({
           // items: items // es5
           items //es6
        })

        // Bug, since setState is async
        //this.recalculate(this.state.items);

        this.recalculate(items);
    }
    

    //callback
    // pass this method as props to child
    // child calls the method
    removeItem = (id: number) => {
        console.log('removeItem called', id);
        //TODO
        const items = this.state
                         .items
                         .filter(item => item.id != id);

        this.setState({
            items
        });

        this.recalculate(items);
    }

    updateItem = (id: number, qty: number) => {
        console.log('updateItem called', id, qty);
        
        //1. clone the array
        const items = this.state
                          .items.map ( item => {
                              if (item.id == id) { // item to update
                                 // clone the object item
                                 // update qty in cloned item
                                  return {...item, qty:qty}
                              }
                              return item;
                          });

        this.setState({items});
        this.recalculate(items);
    }

    empty = () => {
        //TODO
         const items: CartDataItem[] = [];
         this.setState({
             items
         });

         this.recalculate(items);
 
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items: CartDataItem[]) {
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })
    }

    //TODO:
    //componentWillMount

    componentWillMount() {
        this.recalculate(this.state.items);
    }

    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            

            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
                       updateItem={this.updateItem}
                      
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 
