import { useEffect, useState } from "react";
import PopularBlog from "../../Components/Carousel/PopularBlogsCarousel/PopularBlog";
import axios from "axios";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Loader from "../../Components/Loader/Loader";

const PopularBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("https://diverse-blog-server-1l6e08voc-shakil57375s-projects.vercel.app/Popular");
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
                title={"Reader Favorites"}
                subtitle={"Discover the most loved blogs by our readers."}
            />
            <div>{loading ? <Loader /> : <PopularBlog blogs={blogs} />}</div>
        </div>
    );
};

export default PopularBlogs;
