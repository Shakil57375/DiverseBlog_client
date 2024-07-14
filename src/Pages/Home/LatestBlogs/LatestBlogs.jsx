import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import LatestBlog from "./LatestBlog";
const LatestBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs);
    const fetchData = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:5000/latestBlogs"
            );
            setBlogs(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <SectionTitle
                title={"New Arrivals"}
                subtitle={"Stay updated with the freshest posts."}
            />
            <div className="grid grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <LatestBlog key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default LatestBlogs;
