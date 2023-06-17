import { Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";
import Home from "../../pages/Home/home";
const MainLayout = () => {
    return (
        <div>
            <div className="w-full md:w-10/12 mx-auto my-8">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
                {/* react use outlet for the changeable layout */}
            </div>
        </div>
    );
};

export default MainLayout;