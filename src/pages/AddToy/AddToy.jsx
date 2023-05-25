import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';

const AddToy = () => {
    const {user} = useContext(AuthContext);

    const handleSubmit = event =>{
         event.preventDefault();
         const form = event.target;
         const name = form.name.value;
         const selleremail = form.selleremail.value;
         const sellername = form.sellername.value;
         const subcategory = form.option.value;
         const price = form.price.value;
         const rating = form.rating.value;
         const photoUrl = form.photo.value;
         const description = form.description.value;

         const addToy = {name, selleremail, sellername, subcategory, price, rating, photoUrl, description};
         console.log(addToy)
       
    } 
    return (
        <div className='max-w-lg mx-auto p-5'>
            <h1 className='text-blue-950 text-3xl text-center'>Add a Toy</h1>

            <form onSubmit={handleSubmit}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" required className="input input-bordered " />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller E-mail</span>
                    </label>
                    <input type="text" name="selleremail" required placeholder="Seller Email" className="input input-bordered" disabled defaultValue={user.email}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" name="sellername" required placeholder="Seller Name" className="input input-bordered" disabled defaultValue={user.displayName}/>
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Subcategory</span>
                    </label>
                    <select
                        id="option"
                        name="option"
                        // value={formData.option}
                        // onChange={handleChange}
                        className=" input input-bordered mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="">Select an option</option>
                        <option value="Building Sets">Building Sets</option>
                        <option value="Role-Playing">Role-Playing</option>
                        <option value="Remote Control">Remote Control</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" required name="price" placeholder="Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" required name="rating" placeholder="Rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoUrl</span>
                    </label>
                    <input type="text" name="photo" required placeholder="Photo" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" required name="description" placeholder="Description" className="input h-16 input-bordered" />
                </div>


                <div className="form-control mt-6">
                    <input type="submit" className='btn btn-primary' value="Add Toy" />
                </div>
            </form>
        </div>


    );
};

export default AddToy;