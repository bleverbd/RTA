import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/pages/error/ErrorPage";
import Home from "@/pages/user/Home";
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
      
    ],
  },
]);