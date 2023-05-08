import React from "react";
import WorkVideo from "./WorkVideo";
import WorkList from "./WorkList";

const Work = () => {
    return (
        <section id="work">
            <div className="container">
                <div className="row">
                    <WorkVideo />
                    <WorkList />
                </div>
            </div>
        </section>
    );
}

export default Work;