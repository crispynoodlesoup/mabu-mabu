import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./components/home/home";
import Shop from "./components/shop/shop";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home/> },
        { path: "shop", element: <Shop/> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;