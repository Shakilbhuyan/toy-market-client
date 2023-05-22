import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Blog from "../pages/Blog/Blog";
import AllToyes from "../pages/AllToyes/AllToyes";
import AddToy from "../pages/AddToy/AddToy";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import MyToys from "../pages/MyToys/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }, 
      {
        path: '/alltoy',
        element: <AllToyes></AllToyes>
      },
      {
        path: '/mytoy',
        element: <MyToys />
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;