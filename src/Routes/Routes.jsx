import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TestPrivatePage from "../Pages/TestPrivetPage/TestPrivatePage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/allClasses',
          element:<AllClasses></AllClasses>
        },
        {
          path: '/instructors',
          element: <Instructors></Instructors>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },

        {
          path: '/testPrivetPage',
          element: <PrivateRoute><TestPrivatePage></TestPrivatePage></PrivateRoute>
        },
        {
          path: '/dashboard',
          element: <Register></Register>
        }

      ]
    },
    {
      path: 'dashboard',
      element:<Dashboard></Dashboard>,
      children: [
        {
          path: 'myclass',
          element: <MyClass></MyClass>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }  
  ]);