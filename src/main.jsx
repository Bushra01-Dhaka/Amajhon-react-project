import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Products from './Components/Products/Products';
import Dashboard from './Components/Dashboard/Dashboard';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import EachProduct from './Components/EachProduct/EachProduct';
import DashboardTitle from './Components/DashboardTitle/DashboardTitle';
import Profile from './Components/Profile/Profile';
import EditProfile from './Components/EditProfile/EditProfile';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch('https://dummyjson.com/products'),
      },
      {
           path:"/products/:id",
           element: <EachProduct></EachProduct>,
           loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path:"/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard',
            element: <DashboardTitle></DashboardTitle>
          },
          {
            path: '/dashboard/profile',
            element: <Profile></Profile>
          },
          {
            path: '/dashboard/editProfile',
            element: <EditProfile></EditProfile>
          },
        ]
      }
    ]
   
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
