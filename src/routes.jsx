import { lazy } from "react";
const Signin = lazy(() => import('./Components/common/Signin'));
const Signup = lazy(() => import('./Components/common/Signup'));
const NotFound = lazy(() => import('./Components/common/NotFound'));
const ForgetPassword = lazy(() => import('./Components/common/ForgetPassword'));
const ResetPassword = lazy(() => import('./Components/common/ResetPassword'));
const ShowProducts = lazy(() => import('./Components/user/ShowProducts'))
const AddProducts = lazy(() => import("./Components/vendor/AddProducts"))
const ShowUsers = lazy(() => import("./Components/admin/ShowUsers"))

const routes = [
    { path: "/", element: <Signin /> },
    { path: "/signup", element: <Signup /> },
    { path: "/forgetPassword", element: <ForgetPassword /> },
    { path: "/resetPassword", element: <ResetPassword /> },
    { path: "/products", element: <ShowProducts /> },
    { path: "/addProducts", element: <AddProducts /> },
    { path: "/allUsers", element: <ShowUsers /> },
    { path: "*", element: <NotFound /> }
]

export default routes;