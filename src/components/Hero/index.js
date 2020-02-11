import React from "react";
import PropTypes from "prop-types";



const Hero = props => {
    const { scrollToContent, backgrounds, theme } = props;

    return (
        <React.Fragment>
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="md-16 text-center">
                            <h1>Help &amp; support</h1>
                            <p>Search our knowledge base for answers to common questions</p>
                            <div className="search-box">
                                <form className="search-form" method="get">
                                    <i className="fa fa-search"></i><label for="main-search" className="sr-only">Search</label>
                                    <input type="search" name="search" id="main-search" placeholder="What can we help you with?" />
                                    <label for="submit" className="sr-only"></label>
                                    <input type="submit" name="submit" value="Search" id="submit" className="btn" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

Hero.propTypes = {
    scrollToContent: PropTypes.func.isRequired,
    backgrounds: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default Hero;
