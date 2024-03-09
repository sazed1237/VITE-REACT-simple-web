import React from 'react';
import './Countries.css'
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';


const Countries = () => {
    const allCountries = useLoaderData()
    return (
        <div>
            <h3>all Countries: {allCountries.length}</h3>
            <div className='countries'>
                {
                    allCountries.map(country => <Country
                        key={country.id}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;