import { RxCross1 } from "react-icons/rx";
import ActiveLink from "../../utils/ActiveLink/ActiveLink";

const Links = ({ isActive, setIsActive }) => {
    return (
        <div className="h-screen bg-black text-white z-30 w-[300px] fixed right-0 top-0 transition-all pt-10">
            <div
                onClick={() => {
                    setIsActive(!isActive);
                }}
                className="relative font-bold text-2xl"
            >
                <RxCross1 className="absolute right-24 top-6 text-xl text-white cursor-pointer" />
            </div>
            <div className="mt-60 ml-16 flex flex-col gap-8 ">
                <ActiveLink to={"/"}>home</ActiveLink>
                <ActiveLink to={"/foodBlogs"}>Food</ActiveLink>
                <ActiveLink to={"/contact"}>contact</ActiveLink>
            </div>
        </div>
    );
};

export default Links;
