import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}>show details</Link>
            <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
            <button onClick={handleNavigation}>with button handler</button>
        </div>
    );
};

export default Post;