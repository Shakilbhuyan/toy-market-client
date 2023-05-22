import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-blue-950 text-yellow-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/alltoy">All Toy</Link>
                            </li>
                            <li>
                                <Link to="/mytoy">My Toy</Link>
                            </li>
                            <li>
                                <Link to="/addtoy">Add A Toy</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <img src="/download.jpg" className='h-24 w-24 rounded-lg' alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Star Worriors</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="alltoy">All Toy</Link>
                        </li>
                        <li>
                            <Link to="/mytoy">My Toy</Link>
                        </li>
                        <li>
                            <Link to="/addtoy">Add A Toy</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">{
                    user ? <div className='flex'>

                        <img src={user.photoURL} className='block w-16 h-16 rounded-full'/>
                    <button onClick={handleLogOut} className="btn bg-blue-400">Logout</button>
                    </div> :
                        <button className="btn bg-blue-700"><Link to="/login">Login</Link></button>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;