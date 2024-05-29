import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Login";
import Browse from './Browse';

function Body() {
    const Router = createBrowserRouter([
        {
            path: "/",
            element: <Browse></Browse>
        },
        {
            path: "/login",
            element: <Login></Login>
        }
    ])
    return (
        <div>
            <RouterProvider router={Router}/>
        </div>
    )
}

export default Body
