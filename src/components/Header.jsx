import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <nav className="blue-grey darken-2">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Food</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;