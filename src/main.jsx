import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import ShowDetails from './components/ShowDetails/ShowDetails';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Applied from './components/Applied/Applied';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('jobData.json'),
      },
      {
        path:"ShowDetails/:CardId",
        element:<ShowDetails></ShowDetails>,
        
      },
      {
        path:"blog",
        element:<Blog></Blog>
      },
      {
        path:"statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"applied",
        element:<Applied></Applied>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
