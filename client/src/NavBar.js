import {NavLink} from 'react-router-dom'
import tailwind from "./tailwind.config.js"; 



function NavBar() {


    return  ( 
        <nav class="bg-gray-800">"
            <div class="container flex justify between items-center"> 
            <h1 class= "text-black font-bold">Lil' Stinkers</h1>  
                <NavLink>
                    to="/"
                    exact
                    class=
                
                    🧜‍♀️Home
                <NavLink               
                     to="/attacks" 
                     exact
                />     
                
                    Attacks
                <NavLink
                    to="/pirates" 
                    exact 
                />
                    Pirates
                <NavLink
                    to="/ships" 
                    exact
                />
                    Ships
                <NavLink
                    to="/forms" 
                    exact
                /> 
                    Forms
                </NavLink>
            </div>
        </nav>
    )

}

export default NavBar