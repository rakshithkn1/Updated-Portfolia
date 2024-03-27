// import React from 'react'
import { Link ,NavLink} from 'react-router-dom'


    export default function Header() {
        return (
            <header className="shadow sticky z-50 top-0">
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" className="flex items-center ">
                            <img
                            src='data:image/jpeg;base64,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'
                                className="mr-3 h-12"
                                alt="Logo"  style={{width:'100px'}}
                            />
                        </Link>
                        <div className="flex items-center lg:order-2">
                           
                           
                        </div>
                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
                            id="mobile-menu-2" style={{position:'relative' ,left:'310px', fontSize:'20px', color:'green'}}
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 jus">
                                <li>
                                    <NavLink
                                    to='/home'
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-orange-100":"text-gray-700"}lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0  `
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to='/about'
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-orange-100":"text-gray-700"}lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li> <li>
                                    <NavLink
                                    to='/contact'
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-orange-100":"text-gray-700"}lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to='/skills'
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-orange-100":"text-gray-700"}lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Skills
                                    </NavLink>
                                </li>
                                
                                <li>
                                    <NavLink
                                    to='/projects'
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-orange-100":"text-gray-700"}lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Projects
                                    </NavLink>
                                </li>
                                
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    
    

    

