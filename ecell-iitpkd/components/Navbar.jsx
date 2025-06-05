import "./Navbar.css";
import {NavLink , Link} from "react-router-dom";
import { useState } from "react";
function Navbar(){
    // whenever we are using react-router-dom components we have to wrap our entire app inside Browser router 
    // keeps track of different link and router that we have
    // to attribute in Link takes relative path
    const [menuOpen , setMenuOpen] = useState(false);
    function handleClick(){
        setMenuOpen(prev => !prev);
    }
    return <div className="navbar">
        <nav>
            <Link to="/" className="title">Logo</Link>
            {/* takes to homepage of the website */}
            <div className="menu" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="contact">Contact</NavLink></li>
            </ul>
        </nav>
    </div>
}
export default Navbar;

// navbar not sticking to the top on scrolling 
// / route