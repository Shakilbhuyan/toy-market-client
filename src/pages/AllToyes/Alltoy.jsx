import React from 'react';
import { Link } from 'react-router-dom';

const Alltoy = ({ toy }) => {
    const { _id, seller, name, subcategory, price, quantity } = toy;
    return (<>
        <tr className='mb-2 bg-slate-500'>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <p className='text-3xl text-bold'>{seller}</p>
            </td>
            <td>
                <h1 className='text-3xl text-bold' >{name}</h1>
            </td>
            <td>
                <p> {subcategory}</p>
            </td>
            <td>
                <p>$ {price}</p>
            </td>
            <td>{quantity}</td>
            <th>
                <button className="btn  btn-primary"><Link to={`/alltoy/${_id}`}>View Details</Link></button>
            </th>
        </tr>
    </>

    );
};

export default Alltoy;