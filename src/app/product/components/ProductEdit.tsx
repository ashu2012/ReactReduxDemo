import React, {Component} from "react";
import PropTypes from "prop-types";


export default class ProductEdit extends Component<any, any> {
    input: any;

    constructor(props: any) {
        super(props);

        this.state = {
            errors: {
                
            }
        }
    }
    
    componentDidMount() {
 
        this.input.focus();

        //url -- browser
        //path - Routes.js
        //params -- dynamic values
        console.log(this.props.match);

        let id = this.props.match.params.id;

        if (id) {
            this.props.actions.getProduct(id);
        } else {
            this.props
                .actions.updateProduct({
                    name: '',
                    year: 2010
                })
        }

    }

    changeValue(e: any) {
        let {name, value} = e.target;

        let product = Object.assign({}, 
                            this.props.product, 
                            {[name]: value});

        this.props.actions.updateProduct(product);

        console.log(name, value, e.target.validity.valid);
    }

    saveProduct(e: any) {
        //stop browser from submit form
        e.preventDefault();

        this.props.actions
            .saveProduct(this.props.product);
    }
    
    render() {
        return (
            <div> 
            <h2>{this.context.appTitle}</h2>

            <h2>Product Edit - {this.props.match.params.id}</h2>
             

            <form onSubmit={(e) => this.saveProduct(e)}  >
                Name
                <input name="name" 
                 ref={(elem) => this.input = elem}
                        onChange= { (e) => this.changeValue(e) }
                       value={this.props.product.name}
                       
                        minLength={3}
                       
                        />


                Price
                <input name="price" 
                        onChange= { (e) => this.changeValue(e) }
                       value={this.props.product.price} />

                Year
                <input name="year" 
                        onChange= { (e) => this.changeValue(e) }
                       value={this.props.product.year} />

                

                <button type="submit">
                    Save
                </button>

            </form>
            
            
            
            </div>
        )
    }
} 


// ProductEdit.defaultProps = {
//     product: {}   
// }

// ProductEdit.propTypes = {
//     product: PropTypes.object
// }
 