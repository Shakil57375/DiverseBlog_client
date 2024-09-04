import { useLoaderData } from "react-router-dom";
import { format } from "date-fns";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import LatestBlog from "../Home/LatestBlogs/LatestBlog";
import NewsletterSubscription from "../../Components/NewsLetter/NewsLetter";

const BlogDetails = () => {
    const blogInfo = useLoaderData();
    const { title, content, thumbnail, author, createdAt, category } = blogInfo;

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    `https://diverse-blog-server-dvoughvt8-shakil57375s-projects.vercel.app/${category}`
                );
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [category]);

    return (
        <div className="max-w-4xl mx-auto my-10 p-5 mt-48">
            <div className="flex flex-col items-center">
                <img
                    className="w-24 h-24 rounded-full"
                    src={author.avatar}
                    alt={author.firstName + " " + author.lastName}
                />
                <p className="text-xl font-semibold mt-2">
                    {author.firstName + " " + author.lastName}
                </p>
                <p className="text-sm text-gray-500">
                    {format(new Date(createdAt), "MMMM d, yyyy")}
                </p>
            </div>
            <h1 className="text-3xl font-bold mt-10 text-center">{title}</h1>
            <p className="text-lg text-center text-gray-500 mt-2">
                Your most unhappy customers are your greatest source of
                learning.
            </p>
            <img
                className="w-full h-80 object-cover mt-5 rounded-lg"
                src={thumbnail}
                alt={title}
            />
            <div className="mt-10 space-y-4">
                {content.split("\n").map((paragraph, idx) => (
                    <p key={idx} className="text-lg text-gray-700">
                        {paragraph}
                    </p>
                ))}
            </div>
            <div className="mt-10 text-center">
                <p className="text-sm text-gray-500">Share</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a
                        href=""
                        className="hover:border hover:border-black hover:p-2 hover:rounded-full transition-all"
                    >
                        <IoLogoFacebook className="text-2xl " />
                    </a>
                    <a
                        href=""
                        className="hover:border hover:border-black hover:p-2 hover:rounded-full transition-all"
                    >
                        <FaInstagram className="text-2xl" />
                    </a>
                    <a
                        href=""
                        className="hover:border hover:border-black hover:p-2 hover:rounded-full transition-all"
                    >
                        <FaTwitter className="text-2xl" />
                    </a>
                </div>
            </div>
            <div className="mt-10 text-4xl font-bold">
                <h1>Related Blogs</h1>
            </div>
            <div className="grid grid-cols-2 gap-8">
                {blogs.map((blog) => (
                    <LatestBlog key={blog._id} blog={blog} />
                ))}
            </div>
            <div>
                <NewsletterSubscription />
            </div>
        </div>
    );
};

export default BlogDetails;
