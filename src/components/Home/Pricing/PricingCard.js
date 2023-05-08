import React from "react";

const PricingCard = ({ faq }) => {
    return (
        <div className="pricing-column col-lg-4 col-md-6">
            <div className="card">
                <div className="card-header">
                    <h3>{faq.title}</h3>
                </div>
                <div className="card-body">
                    <h2 className="price-text">{faq.price}</h2>
                    <p>{faq.text}</p>
                    <button className="btn btn-lg btn-block btn-dark" type="button">{faq.button}</button>
                </div>
            </div>
        </div>
    );
}

export default PricingCard;