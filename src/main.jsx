import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './componets/Home/Home';
import Register from './componets/Register/Register';
import Login from './componets/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterRB from './componets/RegisterRB/RegisterRB';
import RegisterBs from './componets/RegisterRB/RegisterBs/RegisterBs';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
       element:<Login></Login>
      },
      {
        path:'/rb',
        element:<RegisterRB></RegisterRB>
      },
      {
        path:'/bs',
        element:<RegisterBs></RegisterBs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
