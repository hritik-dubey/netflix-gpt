import React from 'react'
import Header from "./Header";
import {source} from "../config/source"
function Login() {
    return (
        <div>
            <Header></Header>
            <div className="absolute">
                <img
                    src = source.backGroundImage
                    alt="bodyStyle"
                />
            </div>
            <form className='w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white '>
                <h1 className='font-bold text-3xl py-4'>SIGN IN</h1>
                <input type="text" placeholder="Email Address" className='p-2 m-2 w-full'/>
                <input type="password" placeholder="Password" className='p-2 m-2 w-full' />
                <button className='p-2 m-2 w-full bg-red-700'> Sign In</button>
            </form>
        </div>
    )
}

export default Login