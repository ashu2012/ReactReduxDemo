// components/Contact.tsx
import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface ContactProps extends RouteComponentProps<any> {
}

class Contact extends Component<ContactProps> {
    constructor(props: ContactProps) {
        super(props);
    }

    render() {
         

        return (
            <div>
                <h2>Contact {this.props.match.params.country}</h2>
            </div>
        );
    }
}

export default Contact;