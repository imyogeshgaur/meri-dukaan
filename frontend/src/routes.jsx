import { lazy } from "react";
import User from "./redux/User";

//? Common Routes
const Signin = lazy(() => import('./Components/common/Signin'));
const Signup = lazy(() => import('./Components/common/Signup'));
const NotFound = lazy(() => import('./Components/common/NotFound'));
const ForgetPassword = lazy(() => import('./Components/common/ForgetPassword'));
const ResetPassword = lazy(() => import('./Components/common/ResetPassword'));
const NotAuthorized = lazy(() => import("./Components/common/NotAuthorized"))

//? Product Routes
const ShowProducts = lazy(() => import('./Components/user/ShowProducts'))
const ShowProductsByVendor = lazy(() => import("./Components/vendor/ShowProductsByVendor"))
const AddProduct = lazy(() => import("./Components/vendor/AddProduct"))
const AllProducts = lazy(() => import("./Components/admin/AllProducts"))
const DeleteProduct = lazy(() => import("./Components/vendor/DeleteProduct"));
const UpdateProduct = lazy(() => import("./Components/vendor/UpdateProduct"))
const Cart = lazy(()=>import("./Components/user/Cart"))
const EmptyCart = lazy(()=>import("./Components/user/EmptyCart"))

//? User Routes
const AllUsers = lazy(() => import("./Components/admin/AllUsers"))
const UserProfile = lazy(() => import("./Components/user/UserProfile"))
const VendorProfile = lazy(() => import("./Components/vendor/VendorProfile"))
const AdminProfile = lazy(() => import("./Components/admin/AdminProfile"))
const DeleteUser = lazy(() => import("./Components/admin/DeleteUser"));


const routes = [

    // Common Routes
    { path: "/", element: <Signin /> },
    { path: "/signup", element: <Signup /> },
    { path: "/forgetPassword", element: <ForgetPassword /> },
    { path: "/resetPassword/:id", element: <ResetPassword /> },
    { path: "*", element: <NotFound /> },
    { path: "/unauthorized", element: <NotAuthorized /> },

    // Product Routes
    { path: "/products", element: <ShowProducts /> },
    { path: "/addProduct", element: <AddProduct /> },
    { path: "/vendorProducts", element: <ShowProductsByVendor /> },
    { path: "/allProducts", element: <AllProducts /> },
    { path: "/updateProduct/:id", element: <UpdateProduct /> },
    { path: "/deleteProduct/:id", element: <DeleteProduct /> },
    { path: "/cart", element: <Cart /> },
    { path: "/emptyCart", element: <EmptyCart /> },

    // User Routes
    { path: "/allUsers", element: <AllUsers /> },
    { path: "/user", element: <UserProfile /> },
    { path: "/vendor", element: <VendorProfile /> },
    { path: "/admin", element: <AdminProfile /> },
    { path: "/deleteUser/:id", element: <DeleteUser /> },

    //! Test Route
    { path: "/test", element:<User />}
]

export default routes;