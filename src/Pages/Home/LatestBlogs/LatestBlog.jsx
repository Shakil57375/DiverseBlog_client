import { Link } from "react-router-dom";
import { getDateDifferenceFromNow } from "../../../utils";
import { truncateDescription } from "../../../utils/ReduceContent";

const LatestBlog = ({ blog }) => {
    console.log(blog);
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full py-6">
                <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-[400px] h-[350px] object-cover rounded-lg mx-auto "
                />
                <div className="p-4 mt-3">
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
                    <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
                    <div className="text-gray-700 mb-4">
                            {truncateDescription(blog.content, 30)}
                            <Link
                                to={"/blogDetails"}
                                className="text-blue-500 hover:underline"
                            >
                                Read more
                            </Link>
                        </div>
                    <div className="flex items-center mt-4">
                        <img
                            src={blog.author.avatar}
                            alt={`${blog.author.firstName} ${blog.author.lastName}`}
                            className="w-10 h-10 rounded-full mr-4"
                        />
                        <div>
                            <p className="text-sm font-semibold">
                                {blog.author.firstName} {blog.author.lastName}
                            </p>
                            <p className="text-sm text-gray-500">
                                CEO and Founder
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;
