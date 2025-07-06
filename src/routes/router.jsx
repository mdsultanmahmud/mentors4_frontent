import { createBrowserRouter } from "react-router-dom";
import FrontendLayout from "../layouts/FrontendLayout";
import App from "../App";
import Homepage from "../pages/Homepage/Homepage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";
import Services from "../pages/Services/Services";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import BlogDetails from "../pages/Blog/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);

export default router;
