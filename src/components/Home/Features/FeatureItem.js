import React from "react";

const FeatureItem = ({ feature }) => {
    return (
        <div className="feature-box col-lg-4">
            <i className={`icon fas ${feature.icon} fa-4x`}></i>
            <h3 className="feature-title">{feature.title}</h3>
            <p>{feature.description}</p>
        </div>
    );
}

export default FeatureItem;