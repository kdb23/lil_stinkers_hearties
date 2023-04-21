import {NavLink} from 'react-router-dom'
import React from "react";
// import { createPopper } from "@popperjs/core";


function NavBar() {



    return  ( 
        // <div className="h-screen">
        <nav className="bg-white-900">
            <div className="container flex justify between items-center"> 
                <h1 className= "text-white font-bold">All Aboard Lil' Stinkers!</h1>  
              
                <div className=" flex-nowrap items-center"/> 
              
               




              

<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3">
 {/* <div className="w=1/3"></div> */}
 {/* <div class="w-1/3 h-screen flex items-center justify-between p-1"/> */}
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
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
        <span className="ml-2"> 🧜‍♀️ PIRATES 🧜‍♀️</span>  
        </a>  
        </NavLink>  
        </li>
        <li className="nav-item">
        <NavLink to='/ships' exact className="text-white font-bold">
        <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo"> 
        <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> 
        <span className="ml-2">🚢 SHIPS 🚢</span>  
        </a>  
        </NavLink>  
        </li>
        <li className="nav-item">
        <NavLink to ='/attacks' exact className="text-white font-bold">
        <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <span className="ml-2"> 💣 BATTLES 💣 </span>
          </a>         
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to='/forms' exact className= "text-white font-bold">
          <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <span className="ml-2"> 💣 Form 💣 </span>
          </a>         
        </NavLink>
          
        </li>
      </ul>
      <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
        <div className="flex">
          {/* <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-black-600 rounded-full text-sm bg-black-100 items-center rounded-r-none pl-2 py-1 text-black-800 border-r-0 placeholder-black-300">
            <i className="fas fa-search"></i>
          </span> */}
        </div>
        {/* <input type="text" className="px-2 py-1 h-8 border border-solid  border-white-600 rounded-full text-sm leading-snug text-search-700 bg-black-100 shadow-none outline-none focus:outline-none w-full font-roboto-mono rounded-l-none flex-1 border-l-0 placeholder-black-300" placeholder="Search" /> */}
      </div>
    </div>
  </div>
</nav>
<div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHfPj8pD0ZWhdAwuRueqYO0etwnXTKj5rsUA&usqp=CAU" alt="Pirate Image" className="shadow rounded max-w-full h-auto align-middle border-none" /> */}
  </div>
</div>



              
            </div>
        </nav>
    )

}

export default NavBar


