import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-black opacity-50 text-white">
                        {/* Sidebar content here */}
                        <NavLink className=' font-semibold text-lg' to='/dashboard/myclass'>My Selected Classes</NavLink>
                        <NavLink className=' font-semibold text-lg' to='/dashboard/myclass'>My Enrolled Classes</NavLink>
                        <br />
                        <hr />
                        <br />
                        <NavLink className="font-semibold text-lg" to=''>Home</NavLink>
                        <NavLink className="font-semibold text-lg" to='/instructors'>Instructors</NavLink>
                        <NavLink className="font-semibold text-lg" to='/allClasses'>Classes</NavLink>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;