import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../user/User';

const Users = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h1 className="text-5xl">The User is {data.length}</h1>

            <div className='grid grid-cols-3 gap-5 mt-5'>
                {
                data.map(user => <User key={user.id} user={user}></User>)
            }
            </div>

        </div>
    );
};

export default Users;