import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../../layout/Root";
import Home from "../Home/Home";
import Register from "../Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import EstateDetails from "../EstateDetails/EstateDetails";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import Profile from "../Profilie/Profile";
import About from "../About/About";
import BookAppoinment from "../BookAppoinment/BookAppoinment";

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          errorElement: <ErrorPage></ErrorPage>  ,
          children: [
            {
              path: "/",
              element: <Home></Home>,
            },
            {
              path: "/register",
              element: <Register></Register>,
            },
            {
              path: "/about",
              element: <About></About>,
            },
            {
              path: "/login",
              element: <Login></Login>,
            },
            {
              path: "/estateDetails/:fId",
              element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
              loader: ()=> fetch('estates.json'),
            },
            {
              path: "/updateProfile",
              element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>,
             
            },
            {
              path: "/profile",
              element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
             
            },
            {
              path: "/bookappoinment",
              element: <PrivateRoutes><BookAppoinment></BookAppoinment></PrivateRoutes>,
             
            },
          ],
        },
      ]);
   


export default router;