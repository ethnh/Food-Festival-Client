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
            // {
            //     path: 'payment',
            //     element: <Payment></Payment>
            // },
            // {
            //     path: 'paymentHistory',
            //     element: <PaymentHistory></PaymentHistory>
            // },

            // // addmin onlyyyyyy routes
            // {
            //     path: 'adminHome',
            //     element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            // },
            // {
            //     path: 'addItems',
            //     element: <AdminRoute><AddItems></AddItems></AdminRoute>
            // },
            // {
            //     path: 'manageItems',
            //     element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            // },
            // {
            //     path: 'updateItem/:id',
            //     element: <AdminRoute><ItemUpdate></ItemUpdate></AdminRoute>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            // },
            {
                path: 'alluser',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            }
        ]
    }
]);