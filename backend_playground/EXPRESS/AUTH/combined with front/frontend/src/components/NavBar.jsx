import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
const Nav = () => {
    return ( 
        <div className={`${classes.nav}`}>
            <h2>wonder.</h2>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="contact">Details</NavLink>
                
            </ul>
            <div className={`${classes.auth}`}>
                <NavLink to="/login"><h3>Login</h3></NavLink>
                <NavLink to="/signup"><h3>Sign Up</h3></NavLink>
            </div>
                
            
        </div>
     );
}
 
export default Nav;