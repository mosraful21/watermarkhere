import React from "react";
import LinkItem from "./LinkItem";    

const NavLink = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link active" ariaCurrent="page" href="#">Home</a>
                </li>
                <LinkItem link="/pricing" children="Pricing" />
                <LinkItem link="/blog" children="Blog" />
                <LinkItem link="/about" children="About" />
                <LinkItem link="/login" children="Login"/>
            </ul>
        </div>
    );
}

export default NavLink;