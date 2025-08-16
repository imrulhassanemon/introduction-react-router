import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            Im users

        </div>
    );
};

export default Users;