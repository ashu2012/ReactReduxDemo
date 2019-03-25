
import React, {Component} from "react";
import PropTypes from "prop-types";

class ReduxCartItem extends Component<any, any> {
    inputElem: any;

    constructor(props: any) {
        super(props);

        this.state = {
            qty: props.item.qty
        }
    }
 

    componentWillReceiveProps(nextProps:any) {
        this.setState({
            qty: nextProps.item.qty
        })
    }

    componentWillUnmount() {
        console.log("CartItem will unmount");
    }

    //es next
    onChangeText = (e: any) => {
        // target is input element, real dom element
        let target = e.target;

        this.setState({
            qty: target.value
        })

    }

    componentDidMount() {
        // all refs are resolved
        this.inputElem.focus();

         
    }
     
    render() {
        console.log("CartItem render", this.props.item.id);
        
      
        let {item} = this.props;

         
        return (
           
            <tr>
                <td>{item.name}</td>
                <td>
                   {item.price}
                   <p ref="discount"> </p>
                </td>
                <td>
                   <input value={this.state.qty} 
                          type="number"
                          onChange={this.onChangeText}
                          onBlur={ () => this.props.actions.updateItem(item.id, this.state.qty)  }
                          ref = { (elem) => this.inputElem = elem  }
                   />   
                </td>
                <td> {item.price * item.qty} </td>
                <td>
                    <button onClick={() => this.props.actions.removeItem(item.id)}>
                        Remove
                    </button>
                </td>
            </tr>
        )
    }
} 


// ReduxCartItem.defaultProps = {
    
// }

// ReduxCartItem.propTypes = {
    
// }

export default ReduxCartItem;