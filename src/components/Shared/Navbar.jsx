import { Link } from "react-router-dom";

const Navbar = () => {
    const style={
        color:"white"
    }
    return (
        <div className="navbar bg-base-100 bg-gray-800 rounded-t-lg rounded-b-lg">
        <div className="navbar-start">
            <div className="dropdown bg-zinc-50 rounded-t-lg rounded-b-lg">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52">
                <li><Link to={'/owner-list'} style={style}>Owners</Link></li>
                <li><Link to={'/food-list'} style={style}>Foods</Link></li>
                <li><Link to={'/dashboard'} style={style}>Dashboard</Link></li>
                </ul>
            </div>
            <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                <img className="w-12 rounded-t-lg rounded-b-lg" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/4293d8110142211.5fe4b63868448.jpg"/>
            </Link>
            {/* <a href="" className="btn btn-ghost normal-case text-xl">
                <img className="w-12 rounded-t-lg rounded-b-lg" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/4293d8110142211.5fe4b63868448.jpg"/>
            </a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link to={'/owner-list'} style={style}>Owners</Link></li>
                <li><Link to={'/food-list'} style={style}>Foods</Link></li>
                <li><Link to={'/dashboard'} style={style}>Dashboard</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a href="" className="btn bg-gray-800" style={{color:"white"}}>LogOut</a>
        </div>
    </div>
    );
};

export default Navbar;