import { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import BlogCarousel from "../../../Components/Carousel/Carousel";
import { Oval } from "react-loader-spinner";
import Loader from "../../../Components/Loader/Loader";

const TrendingBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/Trending");
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
                title={"Trending Now"}
                subtitle={"Catch up on what's currently buzzing."}
            />
            <div>{loading ? <Loader /> : <BlogCarousel blogs={blogs} />}</div>
        </div>
    );
};

export default TrendingBlogs;
