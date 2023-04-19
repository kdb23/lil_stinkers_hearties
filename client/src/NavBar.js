import {NavLink} from 'react-router-dom'
// import tailwind from "./tailwind.config.js"; 



function NavBar() {


    return  ( 
        <nav className="bg-gray-800">"
            <div className="container flex justify between items-center"> 
                <h1 className= "text-white font-bold">Lil' Stinkers</h1>  
                <NavLink to="/" exact>
                    🧜‍♀️Home
                </NavLink>
                <NavLink to className ="/attacks" exact>
                    Attacks
                </NavLink>
                <NavLink to="/pirates" exact >
                    Pirates
                </NavLink>
                <NavLink to="/ships" exact>
                    Ships
                </NavLink>
                <NavLink to="/forms" exact>
                    Forms
                </NavLink>
            </div>
        </nav>
    )

}

export default NavBar