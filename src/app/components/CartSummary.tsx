    // CartSummary.tsx
    import React, {PureComponent} from "react";

    interface CartSummaryProps {
        amount: number;
        count: number;
    }

    interface CartSummaryState {
        discount: number;
        grandTotal: number;
    }

    //TODO: PropTypes

    // TODO: PureComponent
    // PureComponent is derived from Component
    // PureComponent implements shouldComponentUpdate method
    // PureComponent compare nextState with this.state attributes
    // Purecomponent compare nextProps with this.props
    // return true if any difference in props/state
    export default class CartSummary extends PureComponent<CartSummaryProps, CartSummaryState> {
        constructor(props: CartSummaryProps) {
            super(props);

            this.state = {
                discount: 0,
                grandTotal: 0
            }
        }
    
        //TODO: componentWillMount

        componentWillMount() {
            this.recalculate(this.props);
        }

        // update cycle
        // called on every parent component render on update cycle
        componentWillReceiveProps(nextProps: CartSummaryProps) {

            console.log('CartSummary componentWillReceiveProps');
            console.log('this.props ', this.props);
            console.log('nextProps', nextProps);

            if (this.props.amount != nextProps.amount || 
                this.props.count != nextProps.count) {
                    this.recalculate(nextProps);
            }
        }

        //TODO: componentWillReceiveProps, recalculate 
    
        //TODO: shouldComponentUpdate

        // adding too many conditions is not scalable
        // shouldComponentUpdate(nextProps: CartSummaryProps,
        //                       nextState: CartSummaryState) {
        //     return this.props.amount != nextProps.amount || 
        //            this.props.count != nextProps.count ||
        //            this.state.discount != nextState.discount ||
        //            this.state.grandTotal != nextState.grandTotal;
        // }

        recalculate(props: CartSummaryProps) {
            let discount = 0;

            if (props.count >= 10) {
                discount = 20;
            } else if (props.count >= 5) {
                discount = 10;
            }

            let grandTotal = props.amount - (props.amount * discount / 100);

            this.setState({
                discount, 
                grandTotal
            })
        }
         

        
        render() {
            console.log("CartSummary Render");
            
            return (
                <div> 
                <h2>Cart Summary</h2>
                <p> Amount : {this.props.amount} </p>
                <p> Count : {this.props.count} </p>

                <p> Discount: {this.state.discount} %</p>
                <p> Grand Total: {this.state.grandTotal} </p>
                </div>
            )
        }
    } 
    