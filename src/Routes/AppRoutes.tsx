import HomeLayouts from "@/layouts/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact/Contact";
import Home from "@/pages/Home";
import Products from "@/pages/Product";
import ProjectPage from "@/pages/ProjectPage/ProjectPage";

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
        { path: "contact", element: <Contact /> },
        { path: "projects", element: <ProjectPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
