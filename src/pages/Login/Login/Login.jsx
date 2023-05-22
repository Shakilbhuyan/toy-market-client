import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const { loginUser, } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                navigate(from, { replace: true });
                toast.success("Login successfully")
            })
            .catch(error => {
                toast.error(`${error}`)
            })
    };


    return (
        <div>
            <div className='max-w-lg mx-auto my-8'>
                <h3 className='mx-auto text-blue-950 font-bold'>Please Login</h3>
                <form onSubmit={handleLogin}>
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
                        <input className='btn btn-primary' type="submit" value="Login" />
                    </div>
                    <label>
                    New User? <Link to="/register" className="label-text-alt link link-hover">Sign up</Link>
                        </label>
                </form>
            </div>
        </div>
    );
};

export default Login;