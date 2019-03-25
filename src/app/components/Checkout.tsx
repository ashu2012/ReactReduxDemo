// app/components/Checkout.tsx
import React, {Component, SyntheticEvent} from 'react';

interface CheckoutProps {
};

interface CheckoutState {
    fullName: string;
};

class Checkout extends Component<CheckoutProps, CheckoutState> {
    constructor(props: CheckoutProps) {
        super(props);
        //TODO: initialize state
        this.state = {
            fullName: ''
        }
    }

    onChangeFullName = (event: SyntheticEvent) => {
        // target is input REAL dom element
        const target: any = event.target;
        console.log("Value ", target.value);

        // TODO: set the state with target.value
        this.setState({
            fullName: target.value
        })
    }

    render() {
        console.log('Checkout render');
        return (
            <div>
                <h2>Checkout</h2>
                <form>
                    <label htmlFor="fullName">Full Name</label>
                    <input id="fullName"
                            name="fullName"
                            type="text"
                            value={this.state.fullName}
                            onChange={this.onChangeFullName}
                            />
                </form>
            </div>
        )
    }
}

export default Checkout;