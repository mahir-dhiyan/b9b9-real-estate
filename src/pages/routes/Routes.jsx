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
              path: "/login",
              element: <Login></Login>,
            },
            {
              path: "/estateDetails/:fId",
              element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
              loader: ()=> fetch('estates.json'),
            },
          ],
        },
      ]);
   


export default router;