import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyClass from "../../Dashboard/MyClass/MyClass";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <NavLink className="p-3 font-semibold text-black" to=''>Home</NavLink>
        <NavLink className="p-3 font-semibold text-black" to='/instructors'>Instructors</NavLink>
        <NavLink className="p-3 font-semibold text-black" to='/allClasses'>Classes</NavLink>
        <NavLink className="p-3 font-semibold text-black" to='/dashboard/myclass'>Dashboard
            <button >
                <div className="badge badge-secondary">{+MyClass?.length || 0}</div>
            </button>
        </NavLink>
        {
            user ? <>
                {/* <p>{user.displayName}</p>
                <img src={user.photoURL} alt="" /> */}
                <button onClick={handleLogOut} className="p-3 font-semibold text-black" >Log Out</button>
            </> :
                <>
                    <NavLink className="p-3 font-semibold text-black" to='/login'>Login</NavLink>
                </>
        }


    </>


    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-base-100 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Summer Camp Photography</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;