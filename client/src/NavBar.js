import {NavLink} from 'react-router-dom'
import React from "react";
import AudioFile from './AudioFile.mp3'

function NavBar() {

    return  ( 
        <nav className="bg-gray-500 w-screen">
            <div className="flex justify between items-center">  
                <div className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-6 w-full">
                  <div className="flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <a className="text-lg font-Helvetica-BoldOblique leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                          All Aboard LiL' Stinkers!
                        </a>
                        <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                          <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        </button>
                      </div>
                        <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                          <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <li className="nav-item">
                              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /> 
                              </a>
                            </li>
                            <li className="nav-item">
                              <NavLink to= '/' exact className="text-white font-bold">
                                <a className="px-3 py-2 flex items-center text-sm uppercase font-bold text-white hover:opacity-75" href="#pablo">
                                  <span className="ml-2"> HOME </span>
                                </a>
                              </NavLink> 
                            </li>
                            <li className="nav-item">
                              <NavLink to='/pirates' exact className="text-white font-bold">
                                <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo"> 
                                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> 
                                  <span className="ml-2"> 🧜‍♀️ PIRATES </span>  
                                </a>  
                              </NavLink>  
                            </li>
                            <li className="nav-item">
                              <NavLink to='/ships' exact className="text-white font-bold">
                                <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo"> 
                                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> 
                                    <span className="ml-2">🚢 SHIPS</span>  
                                </a>  
                              </NavLink>  
                            </li>
                            <li className="nav-item">
                              <NavLink to ='/attacks' exact className="text-white font-bold">
                                <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> 
                                    <span className="ml-2"> 💣 BATTLES  </span>
                                </a>         
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink to='/forms' exact className= "text-white font-bold">
                                <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> 
                                    <span className="ml-2"> 📝Forms </span>
                                </a>         
                              </NavLink>
                            </li>
                            <audio controls className='outline-none h-10 w-48' loop>
                                <source src={AudioFile} type='audio/mpeg' />
                            </audio>
                          </ul>
                        </div>
                    </div>
                  </div>
          </nav>
    )

}

export default NavBar


