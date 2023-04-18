import {NavLink} from 'react-router-dom'


function NavBar() {


    return  ( 
        <nav>
            <div>
                <NavLink to="/" exact>
                    🧜‍♀️Home
                </NavLink>
                <NavLink to="/attacks" exact>
                    Attacks
                </NavLink>
                <NavLink to="/pirates" exact >
                    Pirates
                </NavLink>
                <NavLink to="/ships" exact>
                    Ships
                </NavLink>
            </div>
        </nav>
    )

}

export default NavBar