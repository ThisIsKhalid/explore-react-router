import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetail.css';

const FriendDetails = () => {
    const friend = useLoaderData();
    const {name, phone, company, website} = friend;
    return (
        <div className='friendDetail'>
            <h2>{name}</h2>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Company: {company.name}</p>
        </div>
    );
};

export default FriendDetails;