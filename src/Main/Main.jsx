import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HomePageLoader from "../Components/Loader/HomePageLoader";

const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the delay as necessary (in milliseconds)
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            {loading ? (
                <HomePageLoader />
            ) : (
                <div>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Main;
