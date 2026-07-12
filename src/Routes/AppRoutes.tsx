import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayouts from "~/layouts/Home";
import Contact from "~/pages/Contact/Contact";
import Home from "~/pages/Home";
import Products from "~/pages/Product";
import ProductsDetail from "~/pages/ProductDetails/ProductDetails";
import ProjectPage from "~/pages/ProjectPage/ProjectPage";

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
        {
          path: "products",
          children: [
            { index: true, element: <Products /> },
            { path: ":slugId", element: <ProductsDetail /> },
          ],
        },
        { path: "contact", element: <Contact /> },
        { path: "projects", element: <ProjectPage /> },
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
