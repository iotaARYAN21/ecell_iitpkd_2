import "./Navbar.css";
import {NavLink , Link} from "react-router-dom";
import { useState } from "react";
function Navbar(){
    // whenever we are using react-router-dom components we have to wrap our entire app inside Browser router 
    // keeps track of different link and router that we have
    // 'to' attribute in Link takes relative path  -> appends to the current path
    const [menuOpen , setMenuOpen] = useState(false);
    function handleClick(){
        setMenuOpen(prev => !prev);
    }
    return <nav>
            <Link to="/" className="title">
                <div className="nav-logo-container ">
                    <img src="./lg.png" alt="" className="nav-logo" /> 
                </div>
            </Link>
            {/* takes to homepage of the website */}
            <div className="menu" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="allevents">Events</NavLink></li>
                <li><NavLink to="contact">Contact</NavLink></li>
            </ul>
        </nav>
    // </div>
}
export default Navbar;

// navbar not sticking to the top on scrolling 
// / route