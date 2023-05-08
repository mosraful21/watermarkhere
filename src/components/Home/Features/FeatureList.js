import React from "react";
import FeatureItem from "./FeatureItem";
import features from "./FeaturesJSON";

const FeatureList = () => {
    return (
        <div className="row">
            {
                features.map((feature) => (
                    <FeatureItem feature={feature} key={feature.id} />
                ))
            }
        </div>
    );
}

export default FeatureList;