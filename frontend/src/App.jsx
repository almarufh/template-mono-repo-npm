import React from "react";
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router';
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const routers = createBrowserRouter([
   {
      path: '/auth',
      element: <AuthLayout />,
      children: [
         {
            index: true,
            element: <Navigate to='login' replace />,
         },
         {
            path: 'login',
            element: <Login />
         },
         {
            path: 'register',
            element: <Register />
         }
      ]
   },
   {
      path: '/main',
      element: <Dashboard />
   },
   {
      path: '*',
      element: <Navigate to="/auth" replace />,
   }
]);

export default function App() {

   return (
      <RouterProvider router={routers} />
   );

}
