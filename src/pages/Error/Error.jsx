import React from 'react';
import error from '../../../public/404-error-page-not-found.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='object-cover h-50' >
            <img src={error} alt="" />
            </div>
            <h1 className='text-2xl text-bold my-10 text-blue-950 text-center'><Link to="/">Back To Home</Link></h1>
        </div>
    );
};

export default Error;