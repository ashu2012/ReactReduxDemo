// app/components/Footer.tsx
import React from 'react';

import Address, {AddressType} from './Address';

interface FooterProps {
    company: string;
    year?: number; // ? as optional
    
    address: AddressType;
}


function Footer(props: FooterProps) {

    // BAD, should not modify props, immutable
    // props.company = 'React App';

    console.log('Footer called');
    return (
        <div>
             <hr />
              <p id="cr">Copyrights {props.company}, @{props.year}</p>
              <Address address={props.address} />
        </div>
    )
}

export default Footer;