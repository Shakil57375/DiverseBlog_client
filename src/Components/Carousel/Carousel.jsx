// src/components/BlogCarousel.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselOverride.css"; // Import custom CSS to override slick styles
import { Link } from "react-router-dom";
import { getDateDifferenceFromNow } from "../../utils";
import { truncateDescription } from "../../utils/ReduceContent";

const BlogCarousel = ({ blogs }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings} className="mt-8">
            {blogs.map((blog, index) => (
                <div
                    key={index}
                    className="flex flex-col md:flex-row gap-5 items-center bg-white shadow-lg rounded-lg p-6 m-4 custom-slider-item"
                >
                    <div className="md:w-1/2 w-full">
                        <img
                            src={blog.thumbnail}
                            alt={blog.title}
                            className="w-full h-[350px] object-cover rounded-lg"
                        />
                    </div>
                    <div className="md:w-1/2 w-full md:ml-4 mt-4 md:mt-0 flex flex-col justify-center">
                        <div>
                            <p className="text-sm text-gray-500 mb-2">
                                <span className="font-semibold text-lg">
                                    {blog.tags}
                                </span>{" "}
                                —
                                <span className="text-gray-600 text-xs">
                                    {getDateDifferenceFromNow(blog?.createdAt)}
                                    ago
                                </span>
                            </p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-2">
                                {blog.title}
                            </h2>
                        </div>
                        <div className="text-gray-700 mb-4">
                            {truncateDescription(blog.content, 30)}
                            <Link
                                to={"/blogDetails"}
                                className="text-blue-500 hover:underline"
                            >
                                Read more
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={blog.author.avatar}
                                alt={blog.author.firstName}
                                className="w-10 h-10 rounded-full mr-4"
                            />
                            <div>
                                <p className="text-sm font-bold">
                                    {blog.author.firstName}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {blog.author.lastName}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default BlogCarousel;
