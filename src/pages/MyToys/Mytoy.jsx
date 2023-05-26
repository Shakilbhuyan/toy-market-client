import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mytoy = ({ toy, setMyToys, myToys }) => {
    const { _id, seller, name, subcategory, price, quantity } = toy;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-market-server-shakilbhuyan.vercel.app/toys/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(cof =>cof._id !== _id)
                            setMyToys(remaining)
                        }
                    })
            }
        })
    }
    return (
        <>
            <tr className='mb-2 bg-slate-500'>
                <th>
                    <label>
                        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
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
                    <button className="btn  btn-primary"> <Link to={`/alltoy/${_id}`}>View Details</Link></button>
                </th>
            </tr>
        </>



    );
};

export default Mytoy;