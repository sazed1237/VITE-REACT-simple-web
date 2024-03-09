import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Countries from './components/Countries/Countries.jsx';
import CountryDetails from './components/CountryDetails/CountryDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {                   //root path
        path: '/',
        element: <Countries></Countries>,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: 'country/:countryId',
        element: <CountryDetails></CountryDetails>,
        loader: ({params}) => fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`)
      }

    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
