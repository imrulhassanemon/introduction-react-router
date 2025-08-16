import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h1 className="text-5xl">The User is {data.length}</h1>

        </div>
    );
};

export default Users;