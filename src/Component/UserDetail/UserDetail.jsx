import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetail = () => {

    const user = useLoaderData();

    console.log(user);

    return (
        <div>
            <h1 className="text-5xl">User Detail</h1>
            <div className='border p-4 mb-5 text-center'>
                <h2 className="text-2xl">{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company: {user.company.name}</p>
                <p>Address: {user.address.city}, {user.address.street}, {user.address.suite}</p>
                <p>Company: {user.company.name}</p>
            </div>
        </div>
    );
};

export default UserDetail;