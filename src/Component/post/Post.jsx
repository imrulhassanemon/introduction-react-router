import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {

    // cosnt post = {}

    const navigate = useNavigate();

    const {id, title} = post

    const showDetail = ()=> {
        navigate(`${id}`)
    }


    return (
        <div>
             <div key={post.id} className='border p-4 mb-5 text-center'>
                            <h2 className="text-2xl">{title}</h2>
                            <p>{post.body}</p>
                            {/* <button onClick={() => button(posts.id)} className="btn btn-primary mt-5">Read More</button> */}
                            <Link to={`/posts/${id}`} className="btn btn-primary mt-5">Read More</Link>
                            <Link to={`/posts/${id}`} className='btn btn-primary mt-5 mx-2'>Show Detail</Link>
                            <div>
                                <button className='btn btn-primary mt-4' onClick={showDetail }>See more</button>
                            </div>
                        </div>
        </div>
    );
};

export default Post;