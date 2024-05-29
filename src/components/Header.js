import React from 'react'
import {source} from "../config/source"

function Header() {
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-slate-500 z-10'>
            <img
                className='w-44'
                src = source.logo
                alt="logo"
            />
        </div>
    )
}

export default Header
