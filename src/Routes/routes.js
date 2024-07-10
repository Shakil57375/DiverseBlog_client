import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import FoodBlogs from "../Pages/Food/FoodBlogs";

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
                path: "/foodBlogs/recipes",
                element: <FoodBlogs />,
            },
        ],
    },
]);
export default router;