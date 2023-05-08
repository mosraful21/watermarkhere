import React from "react";

const Footer = () => {
    return (
        <footer className="bg-body-tertiary">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Watermark AI</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#"><i class="fa-solid fa-house"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-blinds"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-message-middle"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="#"><i
                            class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#">
                                <i class="fa-brands fa-twitter"></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
