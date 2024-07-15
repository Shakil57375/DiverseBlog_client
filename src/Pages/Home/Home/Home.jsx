import PopularBlogs from "../../PopularBlogs/PopularBlogs";
import LatestBlogs from "../LatestBlogs/LatestBlogs";
import TrendingBlogs from "../TrendingBlogs/TrendingBlogs";

const Home = () => {
    return (
        <div className="mt-24 py-10 px-20">
            <TrendingBlogs />
            <LatestBlogs />
            <PopularBlogs/>
        </div>
    );
};

export default Home;
