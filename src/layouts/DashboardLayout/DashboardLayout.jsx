import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/AdminPanelImage/RestaurantLogo/logo.jpg"
import Navbar from "../../components/Shared/Navbar";
import Footer from "../../components/Shared/Footer";
const DashboardLayout = () => {
    const style={
        color:"white"
    }
    return (

        <div className="md:w-10/12 mx-auto">
            <Navbar/>
            <div className="navbar bg-base-100">
                <div className="flex-none">
                    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"     viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                    </label>
                </div>
            </div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-netural-100 rounded-t-lg rounded-b-lg">
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side rounded-t-lg rounded-b-lg mb-8">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 h-full bg-gray-800 text-base-content">
                    {/* Sidebar content here */}
                        <li>
                            <Link to={'/dashboard'} style={style}>
                                <button className="btn bg-zinc-400">Manage Owner</button>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/dashboard/add-owner'} style={style}>
                                <button className="btn bg-zinc-400">Add Owner</button>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/dashboard/manage-food'} style={style}>
                                <button className="btn bg-zinc-400">Manage Food</button>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/dashboard/add-food'} style={style}>
                                <button className="btn bg-zinc-400">Add Food</button>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} style={style}>
                                <button className="btn bg-zinc-400">Return Home</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>   
    );
};

export default DashboardLayout;