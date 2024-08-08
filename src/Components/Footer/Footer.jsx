import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <Link to={"/"} className="link link-hover">
                        Home
                    </Link>
                    <Link to={"/write"} className="link link-hover">
                        Write
                    </Link>
                    <Link to={"/login"} className="link link-hover">
                        Login
                    </Link>
                    <Link to={"/register"} className="link link-hover">
                        Register
                    </Link>
                </nav>
                <nav>
                <div className="flex justify-center space-x-4 mt-2">
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
                </nav>
                <aside>
                    <p className="flex items-center gap-2">
                        <span>Copyright © ${new Date().getFullYear()} - All right
                        reserved by</span>
                         <a className="text-blue-400" target="_blank" href="https://shakil-s-portfolio-yt9o.vercel.app/">Shakil Hossain ❤️</a> 
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
