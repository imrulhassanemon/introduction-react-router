import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    return (
        <div className='border p-4 mb-5 text-center'>
            <h2 className="text-2xl">{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <Link className='btn btn-accent mt-4' to={`/users/${user.id}`}>Show Detail</Link>
        </div>
    );
};

export default User;