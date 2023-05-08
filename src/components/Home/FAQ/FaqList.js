import React from "react";
import faqs from "./FaqJSON";
import FaqItem from "./FaqItem";

const FaqList = () => {
    return (
        <div>
            {faqs.map((faq) => (
                <FaqItem faq={faq} />
            ))}
        </div>
    );
}

export default FaqList;