import { NavLink } from "react-router-dom"
import './Header.css'
const Header = () => {

    return (
        <div className="nav">
            <NavLink to={'/'} className={({ isActive }) =>  isActive ? 'active' : 'inactive' } >Home</NavLink>
            <NavLink to={'/signup'} className={({ isActive }) =>  isActive ? 'active' : 'inactive' }>SignUp</NavLink>
            <NavLink to={'/details'} className={({ isActive }) =>  isActive ? 'active' : 'inactive' }> Details</NavLink>
        </div>
    )

}

export default Header