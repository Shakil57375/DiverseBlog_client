// main.jsx or index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Pages/Home/Home/Home";
import FoodBlogs from "./Pages/FoodBlogs/FoodBlogs";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";

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
                path: "/foodBlogs",
                element: <FoodBlogs />,
            },
            {
                path : "/register",
                element : <Register/>
            },
            {
                path : "/login",
                element : <Login/>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
