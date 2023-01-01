import { lazy } from "react";
import DeleteProduct from "./Components/vendor/DeleteProduct";
import UpdateProduct from "./Components/vendor/UpdateProduct";

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
const AllProducts = lazy(()=>import("./Components/admin/AllProducts"))

//? User Routes
const AllUsers = lazy(() => import("./Components/admin/AllUsers"))
const UserProfile = lazy(() => import("./Components/user/UserProfile"))
const VendorProfile = lazy(() => import("./Components/vendor/VendorProfile"))
const AdminProfile = lazy(() => import("./Components/admin/AdminProfile"))

const routes = [
    //! Common Routes
    { path: "/", element: <Signin /> },
    { path: "/signup", element: <Signup /> },
    { path: "/forgetPassword", element: <ForgetPassword /> },
    { path: "/resetPassword/:id", element: <ResetPassword /> },
    { path: "*", element: <NotFound /> },
    { path: "/unauthorized", element: <NotAuthorized /> },

    //! Product Routes
    { path: "/products", element: <ShowProducts /> },
    { path: "/addProduct", element: <AddProduct /> },
    { path: "/vendorProducts", element: <ShowProductsByVendor /> },
    { path: "/allProducts", element: <AllProducts />},
    { path: "/updateProduct/:id", element: <UpdateProduct />},
    { path: "/deleteProduct/:id", element: <DeleteProduct />},

    //! User Routes
    { path: "/allUsers", element: <AllUsers /> },
    { path: "/user", element: <UserProfile /> },
    { path: "/vendor", element: <VendorProfile /> },
    { path: "/admin", element: <AdminProfile /> }
]

export default routes;