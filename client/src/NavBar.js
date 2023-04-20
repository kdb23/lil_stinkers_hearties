import {NavLink} from 'react-router-dom'


function NavBar() {


    return  ( 
        <nav>
            <div>
                <NavLink to="/" exact>
                    🧜‍♀️Home
                </NavLink>
                <NavLink to="/attacks" exact>
                    Battles
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