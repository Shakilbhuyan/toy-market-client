import React from 'react';

const Mytoy = ({ toy }) => {
    const { seller, name, subcategory, price, quantity } = toy;
    return (
        <>
            <tr className='mb-2 bg-slate-500'>
                <th>
                    <label>
                        <button className="btn btn-circle btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
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
                    <button className="btn  btn-primary"> Update</button>
                </th>
            </tr>
        </>



    );
};

export default Mytoy;