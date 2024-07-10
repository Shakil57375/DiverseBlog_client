import { useEffect, useState } from "react";
import Carousel from "../../../Components/Carousel/Carousel";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import BlogCarousel from "../../../Components/Carousel/Carousel";
const TrendingBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/blogs");
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
                title={"Trending Now"}
                subtitle={"Catch up on what's currently buzzing."}
            />
            <div>
                <BlogCarousel blogs={blogs} />
            </div>
        </div>
    );
};

export default TrendingBlogs;