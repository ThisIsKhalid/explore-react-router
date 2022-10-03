import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <h3>ID: {id}</h3>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;