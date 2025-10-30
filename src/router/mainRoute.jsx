// react router
import { createBrowserRouter } from "react-router";

// local
import Home from "../pages/landing-page/home";
import Contact from "../pages/landing-page/contact";
import About from "../pages/landing-page/about";
import SignUp from "../pages/landing-page/signUp";
import App from "../App";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Home />,
        path: "/home",
      },
      {
        element: <Contact />,
        path: "/contact",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <SignUp />,
        path: "/signUp",
      },
    ],
  },
]);

export default router;