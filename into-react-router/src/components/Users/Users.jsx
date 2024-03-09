import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css'

const Users = () => {
    const datas = useLoaderData();
    // console.log(datas);
    return (
        <div>
            <h3>Here is my friends: {datas.length} </h3>
            <div className='users'>
                {
                    datas.map(data => <User 
                        key={data.id}
                        data={data}
                    ></User>)   
                }
            </div>
        </div>
    );
};

export default Users;