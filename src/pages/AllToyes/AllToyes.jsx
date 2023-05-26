import React, { useEffect, useState } from 'react';
import Alltoy from './Alltoy';

const AllToyes = () => {
    const [toyes, setToyes] = useState([]);
    useEffect(() => {
        fetch('https://toy-market-server-shakilbhuyan.vercel.app/alltoy')
            .then(res => res.json())
            .then(data => setToyes(data))
    }, []);
    return (
        <div className='p-1'>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Subcategory</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                   
                <tbody>
                {
                        toyes.map(toy => <Alltoy
                            key={toy._id}
                            toy={toy}
                        ></Alltoy>)
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToyes;