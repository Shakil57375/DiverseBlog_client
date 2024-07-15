import { useEffect, useState } from "react";
import PopularBlog from "../../Components/Carousel/PopularBlogsCarousel/PopularBlog";
import axios from "axios";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const PopularBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:5000/popularBlogs"
            );
            setBlogs(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(blogs);

    return (
        <div>
            <SectionTitle
                title={"Reader Favorites"}
                subtitle={"Discover the most loved blogs by our readers."}
            />
            <div>
               <PopularBlog blogs={blogs}/>
            </div>
        </div>
    );
};

export default PopularBlogs;
