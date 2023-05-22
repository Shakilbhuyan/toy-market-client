import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Provider/AuthProvider';




const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        if(password.length < 6){
            toast.error("Please Atlest 6 charater");
            return;
        }
        createUser(email, password, name, photo)
            .then(async (result) => {
                form.reset();
                toast.success('Successfully Registered')
            })
            .catch((error) => {
                console.error(error);
                toast.error(`${error}`)
            })
    };
   
    return (
        <div>
            <div className='max-w-lg mx-auto my-8'>
                <h3 className='mx-auto text-blue-950 font-bold'>Please Regiser</h3>
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" />
                        
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className='btn btn-primary' value="Sign Up" />
                    </div>
                    <label >
                           Already Registerd? <Link to="/login" className="label-text-alt link link-hover">Sign In</Link>
                        </label>
                </form>
            </div>
        </div>
    );
};

export default Register;