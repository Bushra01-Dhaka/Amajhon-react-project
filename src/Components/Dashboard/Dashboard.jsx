import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="min-h-screen  bg-[#BEADFA] flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="w-[100%] md:w-[20%] p-8 shadow-lg block bg-white">
            <Link  to='/products'>Explore-Products</Link> <br/><br />
            <Link  to='/dashboard'>Dashboard</Link><br /><br />
            <Link  to='/dashboard/profile'>Profile</Link><br /><br />
            <Link  to='/dashboard/editProfile'>Edit Profile</Link>

          </div>
          <div className="w-[80%] py-4">
            <Outlet></Outlet>
          </div>

        </div>
    );
};

export default Dashboard;