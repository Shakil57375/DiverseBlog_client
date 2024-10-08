import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";
const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const onSubmit = (data) => {
        createUser(data.email, data.password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    const saveUser = {
                        name: data.name,
                        email: data.email,
                        image: data.photoURL,
                    };
                    fetch("http://localhost:5000/users", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(saveUser),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "User Created Successfully",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                                navigate("/login");
                            }
                        });
                })
                .catch((error) => console.log(error));
        });
    };
    return (
        <>
            <div className="hero min-h-screen bg-base-200 mt-40">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 w-full lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card w-full md:w-[500px] shadow-2xl bg-base-100">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="card-body"
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                />
                                {errors.name && (
                                    <span className="text-red-600">
                                        Name is required
                                    </span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Photo URL
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    {...register("photoURL", {
                                        required: true,
                                    })}
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                />
                                {errors.photoURL && (
                                    <span className="text-red-600">
                                        Photo URL is required
                                    </span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    {...register("email", { required: true })}
                                    name="email"
                                    className="input input-bordered"
                                />
                                {errors.email && (
                                    <span className="text-red-600">
                                        Email is required
                                    </span>
                                )}
                            </div>
                            {/* TO DO Uncomment password validation */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        // pattern:
                                        //   /(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&?"])(?=.*[0-9]){8,20}/
                                    })}
                                    className="input input-bordered"
                                />
                                {/* {errors.password?.type === "required" && (
                  <p className="text-red-600">password is required</p>
                )} */}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">
                                        password must be more then 6 characters
                                    </p>
                                )}
                                {/* {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    password must be above 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Your password must includes one uppercase one lowercase one
                    special character minimum 8 character and minimum 20
                    character and a number also
                  </p>
                )} */}
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    className="btn btn-primary"
                                    type="submit"
                                    value="Register"
                                />
                            </div>
                            <p className="text-center mb-4">
                                <small className="text-center">
                                    Already Have an account? Please{" "}
                                    <Link className="text-blue-700" to="/login">
                                        Login
                                    </Link>{" "}
                                </small>
                            </p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
