import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import MenuPage from "../Pages/ManuPage/MenuPage";
import AllItems from "../Pages/AllItems/AllItems";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/UserDashboard/Cart";
import AllUsers from "../Pages/AdminDashboard/AllUsers";
import AddItems from "../Pages/AdminDashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageFood from "../Pages/AdminDashboard/ManageFood";
import UpdateFoodItem from "../Pages/AdminDashboard/UpdateFoodItem";
import Payment from "../Pages/Payment/Payment";

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
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // e gulo normal user routes
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            //................Admin Route.....................
            {
                path: 'alluser',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageFood',
                element: <AdminRoute><ManageFood></ManageFood></AdminRoute>
            },
            {
                path: 'updateItems/:id',
                element: <AdminRoute><UpdateFoodItem></UpdateFoodItem></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            }
        ]
    }
]);