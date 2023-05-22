import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div >
                <img src="/404-error-page-not-found.jpg" alt="" />
            <h1 className='text-2xl text-bold my-8 text-blue-950 text-center'><Link to="/">Back To Home</Link></h1>
        </div>
    );
};

export default Error;