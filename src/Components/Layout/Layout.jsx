import { NavLink, Outlet, useLocation, useNavigation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { useEffect } from "react";


const Layout = () => {
    const navigation = useNavigation();
    const isLoadingProducts = navigation.state === "loading";

    const location = useLocation();
    console.log(location);

    useEffect(() => {

        console.log("useEffect location", location);

        if (location.pathname === '/') {
            document.title = `Amajhon - home`
        }
        else {
            document.title = `Amajhon${location.pathname.replace('/', '-')}`
        }

        if (location.state) {
            document.title = location.state
        }


    }, [location.pathname, location])



    return (
        <div className="container mx-auto">

            <section className="container mx-auto py-7 px-10 shadow-lg rounded md:flex flex-wrap  justify-between items-center text-center md:text-justify">
                <div>
                    <h1 className="text-3xl font-bold mb-4 md:mb-0">Ama<span className="text-[#BEADFA]">jhon</span></h1>

                </div>
                <nav >
                    <ul className="flex gap-12">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-[#BEADFA]  rounded px-1" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-[#BEADFA]  rounded px-1" : ""
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-[#BEADFA] px-1 rounded" : ""
                            }
                        >
                            Dashboard
                        </NavLink>
                    </ul>
                </nav>

            </section>


            {
                isLoadingProducts ? <Spinner></Spinner> : <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>
            }







            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Amajhon™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-600  sm:mt-0">
                        <li className="mr-4">
                            {/* <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a> */}
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-purple-400" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="mr-4">
                            <NavLink
                                to="/products"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-purple-400 " : ""
                                }
                            >
                                Products
                            </NavLink>
                        </li>
                        <li className="mr-4">
                            <NavLink
                                to="/dashboard"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-purple-400" : ""
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>


                    </ul>
                </div>
            </footer>


        </div>
    );
};

export default Layout;