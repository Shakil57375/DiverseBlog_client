import { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CustomInput from "./CustomInput";
import Swal from "sweetalert2";

const WriteBlog = () => {
    const queryClient = useQueryClient();
    const [state, setState] = useState({
        title: "",
        content: "",
        thumbnail: "",
        author: {
            id: "",
            firstName: "",
            lastName: "",
            avatar: "",
        },
        tags: "",
        category: "",
        isFavourite: false,
    });

    const mutation = useMutation({
        mutationFn: (newBlog) =>
            axios.post("https://diverse-blog-server-dvoughvt8-shakil57375s-projects.vercel.app/blog", newBlog),
        onSuccess: () => {
            queryClient.invalidateQueries(["blogs"]);
            Swal.fire({
                title: "Success!",
                text: "Your blog has been added.",
                icon: "success",
                confirmButtonText: "OK",
            });
        },
        onError: (error) => {
            Swal.fire({
                title: "Error!",
                text: `Failed to add blog: ${error.message}`,
                icon: "error",
                confirmButtonText: "OK",
            });
        },
    });

    const submitData = (event) => {
        event.preventDefault();
        const newData = {
            ...state,
            createdAt: new Date().toISOString(),
            likes: [],
            comments: [],
        };
        mutation.mutate(newData);
        setState({
            title: "",
            content: "",
            thumbnail: "",
            author: {
                id: "",
                firstName: "",
                lastName: "",
                avatar: "",
            },
            tags: "",
            category: "",
            isFavourite: false,
        });
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;

        if (name.startsWith("author.")) {
            const authorField = name.split(".")[1];
            setState({
                ...state,
                author: {
                    ...state.author,
                    [authorField]: value,
                },
            });
        } else {
            setState({
                ...state,
                [name]: value,
            });
        }
    };

    if (mutation.isLoading) {
        return <span>Submitting...</span>;
    }

    return (
        <div className="mt-40 py-10 px-20">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 my-2">
                Add a Blog
            </h2>
            <form className="flex flex-col gap-5" onSubmit={submitData}>
                <div className="flex items-start justify-between gap-5">
                    <CustomInput
                        label="Title"
                        value={state.title}
                        name="title"
                        onInputChange={handleChange}
                        placeholder=""
                        type="text"
                    />
                    <CustomInput
                        label="Content"
                        value={state.content}
                        name="content"
                        onInputChange={handleChange}
                        placeholder=""
                        type="text"
                    />
                </div>
                <div className="flex items-start justify-between gap-5">
                    <CustomInput
                        label="Thumbnail URL"
                        value={state.thumbnail}
                        name="thumbnail"
                        onInputChange={handleChange}
                        placeholder=""
                        type="text"
                    />
                    <CustomInput
                        label="Author ID"
                        value={state.author.id}
                        name="author.id"
                        onInputChange={handleChange}
                        placeholder=""
                        type="text"
                    />
                </div>
                <div className="flex items-start justify-between gap-5">
                    <CustomInput
                        label="Author First Name"
                        value={state.author.firstName}
                        name="author.firstName"
                        onInputChange={handleChange}
                        placeholder=""
                        type="text"
                    />
                    <CustomInput
                        label="Author Last Name"
                        value={state.author.lastName}
                        name="author.lastName"
                        onInputChange={handleChange}
                        placeholder=""
                        type="text"
                    />
                </div>
                <div className="flex items-start justify-between gap-5">
                    {" "}
                    <CustomInput
                        label="Author Avatar"
                        value={state.author.avatar}
                        name="author.avatar"
                        onInputChange={handleChange}
                        placeholder=""
                        type="text"
                    />
                    <CustomInput
                        label="Tags"
                        value={state.tags}
                        name="tags"
                        onInputChange={handleChange}
                        placeholder=""
                        type="text"
                    />
                </div>
                <div className="flex items-start justify-between gap-5">
                    <CustomInput
                        label="Category"
                        value={state.category}
                        name="category"
                        onInputChange={handleChange}
                        placeholder=""
                        type="text"
                    />
                    <div className="flex items-center">
                        <label htmlFor="isFavourite" className="mr-2">
                            Is Favourite
                        </label>
                        <input
                            type="checkbox"
                            name="isFavourite"
                            checked={state.isFavourite}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full hover:shadow-lg"
                >
                    Add Blog
                </button>
            </form>
        </div>
    );
};

export default WriteBlog;
