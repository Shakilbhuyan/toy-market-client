import React from 'react';

const Alltoy = ({ toy }) => {
    const { seller, name, subcategory, price, quantity } = toy;
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
                <button className="btn  btn-primary"> View details</button>
            </th>
        </tr>
    </>

    );
};

export default Alltoy;