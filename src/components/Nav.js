import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";
import { Link } from "react-router-dom";
const Nav = () => {   
    return(
        <nav>
            <Link to="/"><img src={littlelemon_logo} alt="Little Lemon Logo" ></img></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><Link to="/Booking">Reservations</Link></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>

            </ul>
        </nav>
    )
}

export default Nav;
const  styles ={
    textDecoration: 'none',
    color:"black",  
}