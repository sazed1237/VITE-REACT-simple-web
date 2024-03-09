import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveNav from '../ActiveNav/ActiveNav';

const Header = () => {
    return (
        // active nav using component
        <nav>
            <ActiveNav to="/">Home</ActiveNav>
            <ActiveNav to="/users">Users</ActiveNav>
            <ActiveNav to="/posts">Posts</ActiveNav>
            <ActiveNav to="/about">About</ActiveNav>
            <ActiveNav to="/contact">Contact</ActiveNav>
        </nav>
    );
};

export default Header;