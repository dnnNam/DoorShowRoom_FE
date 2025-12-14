import HomeLayouts from "@/layouts/Home";
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
