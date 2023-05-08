import React from "react";
import PricingCard from "./PricingCard";
import pricings from "./PricingsJSON";

const PricingList = () => {
    return (
        <div className="row">
            {pricings.map((plan) => (
                <PricingCard faq={plan} key={plan.id} />
            ))}
        </div>
    );
}

export default PricingList;