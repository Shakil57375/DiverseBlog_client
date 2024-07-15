import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { truncateDescription } from "../../../utils/ReduceContent";
import "./PopularBlog.css";
import { getDateDifferenceFromNow } from "../../../utils";
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-next`}
            style={{
                ...style,
                display: "block",
                background: "gray",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-prev`}
            style={{
                ...style,
                display: "block",
                background: "gray",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
};

const PopularBlog = ({ blogs }) => {
    console.log(blogs);
    const settings = {
        dots: true,
        infinite: true, // Ensure the carousel loops infinitely
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // 3 seconds
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Slider {...settings} className="mt-8">
            {blogs.map((blog, index) => (
                <div
                    key={index}
                    className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 m-4 custom-slider-item"
                >
                    <div className=" w-full">
                        <img
                            src={blog.thumbnail}
                            alt={blog.title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className=" w-full md:ml-4 mt-4 md:mt-0 flex flex-col justify-center">
                        <div className="flex items-center mt-4 gap-2">
                        <span className="font-semibold text-lg">
                            {blog.tags}
                        </span>{" "}
                        —
                        <span className="text-gray-600 text-xs">
                            {getDateDifferenceFromNow(blog?.createdAt)}
                            ago
                        </span>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">
                            {blog.title}
                        </h2>
                        <p className="text-gray-700 mb-4">
                            {truncateDescription(blog?.content, 50)}
                        </p>
                        <Link
                            to={"blogDetails"}
                            className="text-blue-500 hover:underline"
                        >
                            Read more
                        </Link>
                        <div className="flex items-center mt-4 gap-4">
                            <img
                                src={blog.author.avatar}
                                alt={blog.author.firstName}
                                className="w-10 h-10 rounded-full "
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

export default PopularBlog;
