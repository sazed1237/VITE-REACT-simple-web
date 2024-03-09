import React from 'react';
import './Country.css'
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    // console.log(country)

    const {name, cca3, capital, flags, population} = country
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>{name.common}</h3>
            <h6>Capital: {capital}</h6>
            <p>Population: {population}</p>
            <Link to={`/country/${cca3}`}>Show Details</Link>

        </div>
    );
};

export default Country;