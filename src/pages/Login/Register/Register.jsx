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
        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                form.reset();
                toast.success('Successfully Registered')
            })
            .catch((error) => {
                toast.error(`${error}`)
            })
    };
   
    return (
        <div>
            <div style={{ boxShadow: '0px 0px 5px rgba(255, 0, 0, 0.5)' }} className="mx-auto w-50  mt-4 p-4">
                <h3>Please Login</h3>
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" />
                        
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Sign Up" />
                    </div>
                    <label className="label">
                           Already Registerd? <Link to="/login" className="label-text-alt link link-hover">Sign In</Link>
                        </label>
                </form>
            </div>
        </div>
    );
};

export default Register;