import React, { useState, useEffect, useContext } from 'react';
import {AuthContext} from "../../Provider/AuthProvider";

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const {user}= useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/mytoy/${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, []);

    return (
        <div>
            MyToys {myToys.length}
        </div>
    );
};

export default MyToys;