import React from "react";

const Toggler = () => {
    return (
        <div>
            <button className="navbar-toggler" type="button" databstoggle="collapse" databstarget="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    );
}

export default Toggler;