import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import Carousel from "../../../Components/Carousel/Carousel";
import axios from "axios";
import BlogCarousel from "../../../Components/Carousel/Carousel";
const LatestBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/latestBlogs");
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
            <div>
                <BlogCarousel blogs={blogs} />
            </div>
        </div>
    );
};

export default LatestBlogs;
