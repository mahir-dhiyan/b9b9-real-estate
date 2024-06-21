import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../../layout/Root";
import Home from "../Home/Home";
import Register from "../Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";

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
          ],
        },
      ]);
   


export default router;