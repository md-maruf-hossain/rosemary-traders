import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import About from "../Pages/AboutUs/About";
import Contact from "../Pages/Contact/Contact";
import WhyChooseUs from "../Pages/WhyChooseUs/WhyChooseUs";
import Testimonials from "../Pages/Testimonials/Testimonials";
import Products from "../Pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/why-choose-us",
        element: <WhyChooseUs />,
      },
      {
        path: "/testimonial",
        element: <Testimonials />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      
    ],
  },
]);

export default router;
