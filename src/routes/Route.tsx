import MainLayout from "@/layouts/MainLayout";
import Register from "@/pages/auth/Register";
import ErrorPage from "@/pages/error/ErrorPage";
import AboutUs from "@/pages/user/AboutUs";
import Books from "@/pages/user/Books";
import Courses from "@/pages/user/Courses";
import Home from "@/pages/user/Home";
import Notice from "@/pages/user/Notice";
import { createBrowserRouter } from "react-router";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },


    ],
  },

  {
    path: "/auth",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "register",
        element: <Register />,
      },

    ],
  },
]);