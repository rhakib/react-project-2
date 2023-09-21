import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './Components/Products/Products'
import MainLayout from './Components/Layout/MainLayout'
import Home from './Components/Home/Home'
import ProductDetail from './Components/ProductDetail/ProductDetail'
import DashboardLayout from './Components/Layout/DashboardLayout'
import Dashboard from './Components/Dashboard/Dashboard'
import Profile from './Components/Profile/Profile'
import Editprofile from './Components/Profile/Editprofile'


const myCreatedRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/products',
        loader: ()=> fetch(`https://dummyjson.com/products`),
        element: <Products></Products>,
      },
      {
        path: 'products/:id',
        loader: ({params})=> fetch(`https://dummyjson.com/products/${params.id}`) ,
        element: <ProductDetail></ProductDetail>

      },
      {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
          },
          {
            path: '/dashboard/profile',
            element: <Profile></Profile>
          },
          {
            path: '/dashboard/editprofile',
            element: <Editprofile></Editprofile>
          }
        ]
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
