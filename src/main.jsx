// main.jsx or index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Pages/Home/Home/Home";
import Recipes from "./Pages/Food/Recipes";
import WriteBlog from "./Pages/Write/WriteBlog";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BlogDetails from "./Pages/Blogdetails/BlogDetails";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/write",
                element: <WriteBlog />,
            },
            {
                path: "/foodBlogs/recipes",
                element: <Recipes />,
            },
            {
                path: "/blogDetails/:id",
                element: <BlogDetails />,
                loader: ({ params }) =>
                    fetch(`https://diverse-blog-server-dvoughvt8-shakil57375s-projects.vercel.app/blogs/${params.id}`),
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen={false} />
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
