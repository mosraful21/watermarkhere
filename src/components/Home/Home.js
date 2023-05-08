import React from "react";
import Navbar from "../Navbar/Navbar";
import Feature from "./Features/Feature";
import Main from "./Main/Main";
import Work from "./Working/Work";
import Pricing from "./Pricing/Pricing";
import Faq from "./FAQ/FAQ";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Work />
            <Feature />
            <Pricing />
            <Faq />
            <Footer />
        </div>  
    );
}

export default Home;