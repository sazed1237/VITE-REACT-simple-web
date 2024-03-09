import React from 'react';
import './User.css'
import { Link } from 'react-router-dom';

const User = ({data}) => {
        // console.log(data)
        const {name, email, id, phone} = data
    return (
        <div className='data'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default User;