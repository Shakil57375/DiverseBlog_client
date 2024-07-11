/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";
const Login = () => {
    // enable the disabled button
    const { signIn, resetPassword } = useContext(AuthContext);
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    title: "User logged in successfully",
                    showClass: {
                        popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                        popup: "animate__animated animate__fadeOutUp",
                    },
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleReset = () => {
        const email = emailRef.current.value;
        console.log(email);
        resetPassword(email).then(() => {
            alert("Please check your email to reset your password");
        });
    };

    return (
        <>
            <div className="hero min-h-screen bg-base-200 mt-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 w-full lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card  w-full md:w-[500px] shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}>
                            <div className="card-body ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Email
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="email"
                                        name="email"
                                        ref={emailRef}
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Password
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        name="password"
                                        className="input input-bordered"
                                    />
                                    <button
                                        onClick={handleReset}
                                        className="text-indigo-800 text-left space-y-3"
                                    >
                                        Forgot password?
                                    </button>
                                </div>
                                {/* TODO: make button disabled for captcha */}
                                <div className="form-control mt-6">
                                    <input
                                        disabled={false}
                                        type="submit"
                                        value="Login"
                                        className="btn btn-primary"
                                    />
                                </div>
                                <p className="text-center mb-4">
                                    <small className="text-center">
                                        New Here?{" "}
                                        <Link
                                            className="text-blue-700"
                                            to="/register"
                                        >
                                            Create an account
                                        </Link>{" "}
                                    </small>
                                </p>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
