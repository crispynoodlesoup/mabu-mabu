import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./components/home/home";
import Shop from "./components/shop/shop";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home/> },
        { path: "shop", element: <Shop/> },
        { path: "about", element: <About/> },
        { path: "contact", element: <Contact/> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;