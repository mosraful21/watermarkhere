import React from "react";
import NavLink from "./NavLink";
import Toggler from "./Toggler";

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Watermark AI</a>
                    <Toggler />
                    <NavLink />
                </div>
            </nav>
    );
}

export default Navbar;