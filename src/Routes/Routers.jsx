import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import MenuPage from "../Pages/ManuPage/MenuPage";
import AllItems from "../Pages/AllItems/AllItems";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <MenuPage></MenuPage>
            },
            {
                path: 'allItems/:category',
                element: <AllItems></AllItems>
            }
        ]
    },
]);