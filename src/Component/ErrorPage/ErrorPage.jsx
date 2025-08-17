import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError()
    console.log(error);

    return (
        <div className='flex  flex-col justify-center items-center h-screen '>
            <h1 className='text-4xl font-bold'>404 - Not Found</h1>
            <p className='text-2xl font-semibold'>The page you are looking for does not exist.</p>
            <div className='flex flex-col gap-1 font-bold'>
                {
                error.statusText && <p>Error: {error.statusText}</p>
            }
            {
                error.message && <p>Message: {error.message}</p>
            }
            {
                error.status && <p>Status: {error.status}</p>
            }
            <Link className='btn btn-accent' to='/'><button>Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;