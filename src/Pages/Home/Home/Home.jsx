import LatestBlogs from "../LatestBlogs/LatestBlogs";
import TrendingBlogs from "../TrendingBlogs/TrendingBlogs";

const Home = () => {
    return (
        <div className="mt-24 py-10 px-20">
            <TrendingBlogs />
            <LatestBlogs />
        </div>
    );
};

export default Home;
