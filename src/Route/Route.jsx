import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import CoffeeDetails from "../Pages/CoffeeDetails";
import UpdateCoffee from "../Pages/UpdateCoffee";
import AddCoffee from "../Pages/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("http:localhost:4000/coffee"),
      },

      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/coffee/${params.id}`),
      },

      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:4000/coffee/${params.id}`),
      }
    ],
  },
]);

export default router;
