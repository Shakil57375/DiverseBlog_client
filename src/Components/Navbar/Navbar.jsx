import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./style.module.css";
import "./Navbar.css";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import Links from "./Links";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <div className="flex items-center bg-white shadow-lg py-6 px-20 fixed w-full top-0 z-20">
                <Link
                    to={"/"}
                    className="flex basis-1/5 items-center justify-start"
                >
                    <img src={logo} alt="" className="h-28 w-28" />
                </Link>
                <div className="flex basis-1/5">
                    <div className="relative">
                        <input
                            type="text"
                            name="q"
                            className="w-full border h-12 shadow py-5 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200 px-10"
                            placeholder="search"
                        />
                        <CiSearch className="absolute top-4 left-4 text-xl" />
                    </div>
                </div>
                <div className="flex basis-1/5 items-center justify-end">
                    <div className="flex items-center gap-5">
                        <a
                            href=""
                            className="hover:border hover:border-black hover:p-2 hover:rounded-full transition-all"
                        >
                            <IoLogoFacebook className="text-2xl " />
                        </a>

                        <a
                            href=""
                            className="hover:border hover:border-black hover:p-2 hover:rounded-full transition-all"
                        >
                            <FaInstagram className="text-2xl" />
                        </a>

                        <a
                            href=""
                            className="hover:border hover:border-black hover:p-2 hover:rounded-full transition-all"
                        >
                            <FaTwitter className="text-2xl" />
                        </a>
                    </div>
                </div>
                <div className="flex gap-3 basis-2/5 items-center justify-end z-50">
                    {user && (
                        <Link to={"/write"} className="btn btn-primary">
                            Write
                        </Link>
                    )}
                    {user && (
                        <Link to={"/profile"}>
                            <img
                                src={user?.photoURL}
                                alt={user?.displayName}
                                className="h-14 w-14 rounded-full"
                            />
                        </Link>
                    )}

                    <div
                        onClick={() => {
                            setIsActive(!isActive);
                        }}
                        className={`${styles.button} z-50`}
                    >
                        <div
                            className={`${styles.burger} ${
                                isActive ? styles.burgerActive : ""
                            } z-50`}
                        ></div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isActive && (
                    <Links isActive={isActive} setIsActive={setIsActive} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
