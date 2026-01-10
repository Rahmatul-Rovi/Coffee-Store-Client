import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./component/Home.jsx";
import AddCoffee from "./component/AddCoffee.jsx";
import UpdateCoffee from "./component/UpdateCoffee.jsx";
import SignIn from "./component/SignIn.jsx";
import SignUp from "./component/SignUp.jsx";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import Contact from "./component/Contact.jsx";
import AboutUs from "./component/AboutUs.jsx";
import PrivateRoute from "./route/PrivateRoute.jsx";
import CoffeeDetails from "./component/CoffeeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "addCoffee",
        element: <PrivateRoute> <AddCoffee></AddCoffee> </PrivateRoute>
      },
     {
    path: "coffeeDetails/:id",
    element: <PrivateRoute> <CoffeeDetails /> </PrivateRoute>, 
    loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`) 
},
      {
        path: "updateCoffee/:id",
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        element: <PrivateRoute> <UpdateCoffee></UpdateCoffee> </PrivateRoute>
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
        path: "/about",
        Component: AboutUs
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
