import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
            <div className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-1">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </section>
                </div>

                <div className="text-center p-3" >
                    © 2022 Copyright:
                    <a className="text-white" href="#">Braian Jassán</a>
                </div>
            </div>
        </>
    );
};

export default Footer;