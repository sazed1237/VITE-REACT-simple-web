import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CountryDetails = () => {
    const country = useLoaderData();
    console.log(country)
    const {name,flags, population, capital, region, timezones, continents} = country[0]
    const navigate = useNavigate()

    const goBackHandler = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h1>Country Details of {name.common} </h1>
            <img src= {flags.png} alt="" />
            <h4>Capital: {capital}</h4>
            <p>Population: {population}</p>
            <p>Region: {region} </p>
            <p><small>continents: {continents}</small></p>
            <p><small>TimeZone: {timezones}</small></p>
            <button onClick={goBackHandler}>Go Back</button>
        </div>
    );
};

export default CountryDetails;