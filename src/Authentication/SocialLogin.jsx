import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import GoogleLogo from "../../src/assets/google-logo.png"
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedInUSer = result.user;
                const saveUser = {
                    name: loggedInUSer.displayName,
                    email: loggedInUSer.email,
                };
                console.log(loggedInUSer);
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(saveUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        navigate(from, { replace: true });
                    });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div className=" flex justify-center w-full pb-10"> 
            <div className="divider"></div>
            <button
                onClick={handleGoogleSignIn}
                className=" flex items-center gap-4  px-8 py-4 shadow-lg rounded-2xl"
            >
                <img src={GoogleLogo} className="w-12 h-12" alt="" />
                <span className="text-lg font-semibold">Sign in with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;
