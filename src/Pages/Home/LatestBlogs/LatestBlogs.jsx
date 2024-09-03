import { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import LatestBlog from "./LatestBlog";
import { Oval } from "react-loader-spinner";
import Loader from "../../../Components/Loader/Loader";

const LatestBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("https://diverse-blog-server-1l6e08voc-shakil57375s-projects.vercel.app/Latest");
            setBlogs(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
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
            <div>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <LatestBlog key={blog._id} blog={blog} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LatestBlogs;
