import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    console.log(post)

    const navigate = useNavigate()

    const handleGoBack = () =>{
        navigate(-1)
    }
    
    return (
        <div>
            <h4>here is this post Details</h4>
            <p>Post ID: {post.id}</p>
            <h5>Title: {post.title}</h5>
            <p>Body: {post.body}</p>
            <button onClick={handleGoBack}>Go back</button>

        </div>
    );
};

export default PostDetails;