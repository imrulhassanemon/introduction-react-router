import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {

    const post = useLoaderData();
    console.log(post);

    const {id, title, body} = post;
    const navigate = useNavigate();
    const handelGoBack = ()=>{
        navigate(-1)
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <p className="text-4xl">Details</p>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={()=>handelGoBack()} className='btn btn-primary'> go Back</button>
        </div>
    );
};

export default PostDetail;