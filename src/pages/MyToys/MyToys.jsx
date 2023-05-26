import React, { useState, useEffect, useContext } from 'react';
import {AuthContext} from "../../Provider/AuthProvider";
import Mytoy from './Mytoy';

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const {user}= useContext(AuthContext);

    useEffect(() => {
        fetch(`https://toy-market-server-shakilbhuyan.vercel.app/mytoy/${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
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
                       myToys.map(toy=><Mytoy
                       key={toy._id}
                       toy={toy}
                       setMyToys={setMyToys}
                       myToys={myToys}
                       ></Mytoy>)
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;