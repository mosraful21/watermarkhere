import React from "react";
import MainContent from "./MainContent";
import MainImage from "./MainImage";

const Main = () => {
    return (
        <section id="main">
            <div className="container">
                <div className="row">
                    <MainContent />
                    <MainImage />
                </div>
            </div>
        </section>
    ); 
}

export default Main;