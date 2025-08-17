import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Post from '../post/Post';

const Posts = () => {

    const posts = useLoaderData();

    return (
        <div>
            <h1 className="text-5xl">Total Posts: {posts.length}</h1>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;