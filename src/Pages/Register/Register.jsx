
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const retypePassword = form.retypePassword.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, retypePassword, photoUrl);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            Swal.fire({
                title: 'User Registration Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        })
       
    }


    return (
        <div>
            <button className=" btn-green"><NavLink to='/'>Go Back to Home Page</NavLink></button>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col flex-row-reverse">
                        <div className="text-center ">
                            <h1 className="text-5xl font-bold">Register now !!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                                </div>
                                <div className="form-control d-flex">
                                    <label className="label">
                                        <span className="label-text">Retype Password</span>
                                    </label>
                                    <input type="password" name='retypePassword' placeholder="Retype password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name='photoUrl' placeholder="Photo Url" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" value="register" className="btn-green">Register</button>
                                </div>
                                <div className="text-center">
                                    <small>Already Haver an Account?<NavLink className='btn-link' to='/login'>Please Log In</NavLink></small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;