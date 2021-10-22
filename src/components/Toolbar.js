import React from 'react';
import { Link } from 'react-router-dom'

export default function Toolbar() {
    return (
        <nav className="bg-white flex h-12 fixed w-full px-2 md:px-0 z-20 items-center shadow-md">
            {/* drawer toggle button */}
            <div className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            {/* navbar padding for md (768px) and larger screens */}
            <div className="flex items-center w-full md:w-11/12 px-2 md:px-0 mx-auto">
                {/* logo */}
                <Link to="/">
                    <div className="cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out">
                        <h2 className="font-bold">Recipe App</h2>
                    </div>
                </Link>

                {/* spacer */}
                <div className="flex-1" />

                {/* search icon */}
                <div className="cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

            </div>
            {/* end: navbar padding */}

        </nav>
    )
}
