import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body, userId} = post;
    const navigate = useNavigate();
    const findAuthor = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h3>ID: {id}</h3>
            <h5>{title}</h5>
            <p>{body}</p>
            <button onClick={findAuthor}>Get Author</button>
        </div>
    );
};

export default PostDetails;