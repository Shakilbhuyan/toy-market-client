import React from 'react';
import { FaStar} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SubcategoryOne = ({ subOne }) => {

    const {_id,  name, price, rating, img } = subOne;


    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} className='w-96 h-96' alt="Shoes" /></figure>
            <div className="card-body text-blue-950">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <div className='flex  items-center'>Rating:{rating}<FaStar></FaStar>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/alltoy/${_id}`}>View Details</Link></button>
                </div>
            </div>
        </div>

    );
};

export default SubcategoryOne;