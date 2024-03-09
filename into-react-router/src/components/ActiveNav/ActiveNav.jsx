import React from 'react';
import './ActiveNav.css'
import { NavLink } from 'react-router-dom';

    const ActiveNav = ({to, children}) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "active" : "" }
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveNav;