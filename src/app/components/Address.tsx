// app/components/Address.tsx
import React from 'react';

export interface AddressType {
    city: string;
    state: string;
    pincode?: number; // ? as optional
}

interface AddressProps {
    address: AddressType
}

function Address(props: AddressProps) {
 
    console.log('Address called');
    return (
        <div>
             <span>Address </span>
             <span>{props.address.city} </span>
             <span>{props.address.state} </span>
             <span>{props.address.pincode} </span>
        </div>
    )
}

export default Address;