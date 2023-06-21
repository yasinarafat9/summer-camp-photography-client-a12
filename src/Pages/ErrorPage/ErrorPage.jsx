import { NavLink } from 'react-router-dom';
import errorImg from '../../../src/assets/Images/error-404.png'

const ErrorPage = () => {
    return (
        <div className='mx-auto text-center'>
            <img className='mx-auto' src={errorImg} alt="" />
            <br />
            <NavLink to='/'><button className='btn btn-green '>Go back to home page</button></NavLink>
        </div>
    );
};

export default ErrorPage;