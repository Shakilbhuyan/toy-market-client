import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const toyes = useLoaderData();
    const {_id,  name, price, rating, img , selleremail, description,subcategory} = toyes;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto ">
            <figure><img src={img} className='w-96 h-96' alt="Shoes" /></figure>
            <div className="card-body text-blue-950">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <div className='flex  items-center'>Rating:{rating}<FaStar></FaStar>
                </div>
                <p>Seller E-mail : {selleremail}</p>
                <p>SubCategory: {subcategory}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ViewDetails;