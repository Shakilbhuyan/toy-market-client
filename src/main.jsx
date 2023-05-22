import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Router.jsx';
import "react-image-gallery/styles/css/image-gallery.css";
import 'react-tabs/style/react-tabs.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Provider/AuthProvider.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
     <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
