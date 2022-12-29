import { lazy } from "react";

const Signin = lazy(() => import('./Components/common/Signin'));
const Signup = lazy(() => import('./Components/common/Signup'));
const NotFound = lazy(() => import('./Components/common/NotFound'));
const ForgetPassword = lazy(() => import('./Components/common/ForgetPassword'));
const ResetPassword = lazy(() => import('./Components/common/ResetPassword'));
const ShowProducts = lazy(() => import('./Components/user/ShowProducts'))
const AddProduct = lazy(() => import("./Components/vendor/AddProduct"))
const ShowUsers = lazy(() => import("./Components/admin/ShowUsers"))
const UserProfile = lazy(()=>import("./Components/user/UserProfile"))
const VendorProfile = lazy(()=>import("./Components/vendor/VendorProfile"))
const NotAuthorized = lazy(()=>import("./Components/common/NotAuthorized"))
const ShowProductsByVendor = lazy(()=>import("./Components/vendor/ShowProductsByVendor"))

const routes = [
    { path: "/", element: <Signin /> },
    { path: "/signup", element: <Signup /> },
    { path: "/forgetPassword", element: <ForgetPassword /> },
    { path: "/resetPassword/:id", element: <ResetPassword /> },
    { path: "/products", element: <ShowProducts /> },
    { path: "/addProduct", element: <AddProduct /> },
    { path: "/allUsers", element: <ShowUsers /> },
    { path: "/user", element: <UserProfile /> },
    { path: "/vendor", element: <VendorProfile /> },
    { path: "/vendorProducts", element: <ShowProductsByVendor /> },
    { path: "*", element: <NotFound /> },
    {path:"/unauthorized",element:<NotAuthorized />}
]

export default routes;