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

                {/* nav menu area */}

                {/* menu item */}
                {/* todo: add "mr-5" */}
                <div className="cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out">
                    <Link to="/">
                        Home
                    </Link>
                </div>
                {/* end: menu item */}

                {/* menu item */}
                {/* <div className="cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out">
                    <Link to="/about">
                        About
                    </Link>
                </div> */}
                {/* end: menu item */}

                {/* end: nav menu area */}

            </div>
            {/* end: navbar padding */}

        </nav>
    )
}
