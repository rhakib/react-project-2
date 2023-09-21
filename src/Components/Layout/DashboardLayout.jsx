import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex gap-6">
            <div className="mt-10 bg-slate-100 p-8 text-xl w-[20%]">
                <ul className="">
                    <Link to={'/dashboard'}><li>Dashboard</li></Link>
                    <Link to={'/dashboard/profile'}><li>Profile</li></Link>
                    <Link to={'/dashboard/editprofile'}><li>Editprofile</li></Link>
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;