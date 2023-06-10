import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <button className=" btn-green"><NavLink to='/'>Go Back to Home Page</NavLink></button>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col flex-row-reverse">
                        <div className="text-center ">
                            <h1 className="text-5xl font-bold">Register now if you havn't yet</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" className="input input-bordered" />
                                </div>
                                <div className="form-control d-flex">
                                    <label className="label">
                                        <span className="label-text">Retype Password</span>
                                    </label>
                                    <input type="password" placeholder="Retype password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="Photo Url" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn-green">Login</button>
                                </div>
                                <div className="text-center">
                                    <small>Already Haver an Account?<NavLink className='btn-link' to='/login'>Please Log In</NavLink></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;