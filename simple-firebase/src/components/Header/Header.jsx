import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/singup">Sing up</Link>
        </div>
    );
};

export default Header;