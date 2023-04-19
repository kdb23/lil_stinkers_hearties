import {NavLink} from 'react-router-dom'
// import tailwind from "./tailwind.config.js"; 



function NavBar() {


    






    

    return  ( 
        <nav className="bg-gray-600">"
            <div className="container flex justify between items-center"> 
                <h1 className= "text-white font-bold">Lil' Stinkers</h1>  
                <NavLink to= '/' exact className="text-white font-bold"> 🧜‍♀️Home 
                <div className="relative flex flex-wrap items-center justify-between px-2 py-3"/>
                    
                </NavLink>
                <NavLink to ='/attacks' exact className="text-white font-bold">
                    Attacks
                </NavLink>
                <NavLink to='/pirates' exact className="text-white font-bold">
                    Pirates
                </NavLink>
                <NavLink to='/ships' exact className="text-white font-bold">
                    Ships
                </NavLink>
                <NavLink to='/forms' exact className= "text-white font-bold">
                    Forms
                </NavLink>
            </div>
        </nav>
    )

}

export default NavBar