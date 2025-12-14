import HomeLayouts from "@/layouts/Home";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Products from "@/pages/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "products", element: <Products /> },
        { path: "about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
