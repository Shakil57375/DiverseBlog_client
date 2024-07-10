import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import {
    FaChevronDown,
    FaChevronUp,
    FaHome,
    FaUtensils,
    FaRunning,
    FaLaptopCode,
    FaFilm,
    FaBusinessTime,
} from "react-icons/fa";
import ActiveLink from "../../utils/ActiveLink/ActiveLink";
import { motion } from "framer-motion";

const Links = ({ isActive, setIsActive }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const toggleCategory = (category) => {
        setActiveCategory(activeCategory === category ? null : category);
    };

    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="h-screen bg-black text-white z-30 w-[300px] fixed right-0 top-0 pt-10"
        >
            <div
                onClick={() => {
                    setIsActive(!isActive);
                }}
                className="relative font-bold text-2xl"
            >
                <RxCross1 className="absolute right-24 top-6 text-xl text-white cursor-pointer" />
            </div>
            <div className="mt-28 ml-16 flex flex-col gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <ActiveLink to={"/"}>
                        <div className="flex items-center ">
                        <FaHome />
                        <span className="pl-2">Home</span>
                        </div>
                    </ActiveLink>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="cursor-pointer"
                    onClick={() => toggleCategory("food")}
                >
                    <div className="flex items-center">
                        <FaUtensils className="mr-2" />
                        <span>Food</span>
                        {activeCategory === "food" ? (
                            <FaChevronUp className="ml-auto" />
                        ) : (
                            <FaChevronDown className="ml-auto" />
                        )}
                    </div>
                    {activeCategory === "food" && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                            <ActiveLink to={"/foodBlogs/recipes"}>
                                Recipes
                            </ActiveLink>
                            <ActiveLink to={"/foodBlogs/reviews"}>
                                Restaurant Reviews
                            </ActiveLink>
                            <ActiveLink to={"/foodBlogs/healthy"}>
                                Healthy Eating
                            </ActiveLink>
                            <ActiveLink to={"/foodBlogs/trends"}>
                                Food Trends
                            </ActiveLink>
                            <ActiveLink to={"/foodBlogs/tips"}>
                                Cooking Tips
                            </ActiveLink>
                        </div>
                    )}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="cursor-pointer"
                    onClick={() => toggleCategory("sports")}
                >
                    <div className="flex items-center">
                        <FaRunning className="mr-2" />
                        <span>Sports</span>
                        {activeCategory === "sports" ? (
                            <FaChevronUp className="ml-auto" />
                        ) : (
                            <FaChevronDown className="ml-auto" />
                        )}
                    </div>
                    {activeCategory === "sports" && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                            <ActiveLink to={"/sports/cricket"}>
                                Cricket
                            </ActiveLink>
                            <ActiveLink to={"/sports/football"}>
                                Football
                            </ActiveLink>
                            <ActiveLink to={"/sports/basketball"}>
                                Basketball
                            </ActiveLink>
                            <ActiveLink to={"/sports/tennis"}>
                                Tennis
                            </ActiveLink>
                            <ActiveLink to={"/sports/esports"}>
                                Esports
                            </ActiveLink>
                            <ActiveLink to={"/sports/fitness"}>
                                Fitness and Training
                            </ActiveLink>
                        </div>
                    )}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="cursor-pointer"
                    onClick={() => toggleCategory("technology")}
                >
                    <div className="flex items-center">
                        <FaLaptopCode className="mr-2" />
                        <span>Technology</span>
                        {activeCategory === "technology" ? (
                            <FaChevronUp className="ml-auto" />
                        ) : (
                            <FaChevronDown className="ml-auto" />
                        )}
                    </div>
                    {activeCategory === "technology" && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                            <ActiveLink to={"/technology/gadgets"}>
                                Gadgets and Reviews
                            </ActiveLink>
                            <ActiveLink to={"/technology/software"}>
                                Software and Apps
                            </ActiveLink>
                            <ActiveLink to={"/technology/ai"}>
                                AI and Machine Learning
                            </ActiveLink>
                            <ActiveLink to={"/technology/cybersecurity"}>
                                Cybersecurity
                            </ActiveLink>
                            <ActiveLink to={"/technology/development"}>
                                Programming and Development
                            </ActiveLink>
                        </div>
                    )}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="cursor-pointer"
                    onClick={() => toggleCategory("entertainment")}
                >
                    <div className="flex items-center">
                        <FaFilm className="mr-2" />
                        <span>Entertainment</span>
                        {activeCategory === "entertainment" ? (
                            <FaChevronUp className="ml-auto" />
                        ) : (
                            <FaChevronDown className="ml-auto" />
                        )}
                    </div>
                    {activeCategory === "entertainment" && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                            <ActiveLink to={"/entertainment/movies"}>
                                Movies and TV Shows
                            </ActiveLink>
                            <ActiveLink to={"/entertainment/music"}>
                                Music
                            </ActiveLink>
                            <ActiveLink to={"/entertainment/celebrity"}>
                                Celebrity News
                            </ActiveLink>
                            <ActiveLink to={"/entertainment/videogames"}>
                                Video Games
                            </ActiveLink>
                            <ActiveLink to={"/entertainment/events"}>
                                Events and Festivals
                            </ActiveLink>
                        </div>
                    )}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="cursor-pointer"
                    onClick={() => toggleCategory("business")}
                >
                    <div className="flex items-center">
                        <FaBusinessTime className="mr-2" />
                        <span>Business</span>
                        {activeCategory === "business" ? (
                            <FaChevronUp className="ml-auto" />
                        ) : (
                            <FaChevronDown className="ml-auto" />
                        )}
                    </div>
                    {activeCategory === "business" && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                            <ActiveLink to={"/business/entrepreneurship"}>
                                Entrepreneurship
                            </ActiveLink>
                            <ActiveLink to={"/business/marketing"}>
                                Marketing and Sales
                            </ActiveLink>
                            <ActiveLink to={"/business/finance"}>
                                Finance and Investing
                            </ActiveLink>
                            <ActiveLink to={"/business/startups"}>
                                Startups
                            </ActiveLink>
                            <ActiveLink to={"/business/productivity"}>
                                Productivity
                            </ActiveLink>
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Links;
