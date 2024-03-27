// import React from 'react'
import {Link} from 'react-router-dom'


export default function Footer() {
    return (
        <footer className="bg-white border-y" style={{position:'relative' ,top:'100px',marginBottom:'-800px'}}>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-0 lg:py-8" >
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0" >
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/png;base64,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"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/home" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/rakshithkn1"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <Link to="/skills" className="hover:underline">
                                       Skills
                                    </Link>
                               
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/contact" className="hover:underline">
                                        Contacts
                                    </Link>
                                </li>
                                <li style={{position:'relative'}}>
                                    <Link to="/projects" className="hover:underline">
                                        Projects on Javascript and React.js
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
               
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        
                       
                       
                       
                          
                       
                    
                </div>
            </div>
        </footer>
    );
}
