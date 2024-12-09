import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import CoffeeDetails from "../Pages/CoffeeDetails";
import UpdateCoffee from "../Pages/UpdateCoffee";
import AddCoffee from "../Pages/AddCoffee";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("https://y-two-puce.vercel.app/coffee"),
      },

      {
        path: "/signin",
        element: <SignIn/>
      },

      {
        path: "/signup",
        element: <SignUp/>
      },

      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`https://y-two-puce.vercel.app/coffee/${params.id}`),
      },

      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`https://y-two-puce.vercel.app/coffee/${params.id}`),
      }
    ],
  },
]);

export default router;
