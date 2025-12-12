import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Home() {
  return <h1>Home page demo</h1>;
}

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}
