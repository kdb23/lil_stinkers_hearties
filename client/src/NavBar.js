import {NavLink} from 'react-router-dom'
// import tailwind from "./tailwind.config.js"; 



function NavBar() {


    






    

    return  ( 
        <nav className="bg-gray-600">"
            <div className="container flex justify between items-center"> 
                <h1 className= "text-white font-bold">Lil' Stinkers</h1>  
                <NavLink to className="text-white font-bold /" exact> 🧜‍♀️Home 
                <div className="relative flex flex-wrap items-center justify-between px-2 py-3"/>
                    
                </NavLink>
                <NavLink to className="text-white font-bold /attacks" exact>
                    Attacks
                </NavLink>
                <NavLink to className="text-white font-bold /pirates" exact >
                    Pirates
                </NavLink>
                <NavLink to className="text-white font-bold /ships" exact>
                    Ships
                </NavLink>
                <NavLink to className= "text-white font-bold /forms" exact>
                    Forms
                </NavLink>
            </div>
        </nav>
    )

}

export default NavBar