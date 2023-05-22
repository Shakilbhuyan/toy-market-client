import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Blog from "../pages/Blog/Blog";
import AllToyes from "../pages/AllToyes/AllToyes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },{
       path:'/alltoy',
       element:<AllToyes></AllToyes>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;