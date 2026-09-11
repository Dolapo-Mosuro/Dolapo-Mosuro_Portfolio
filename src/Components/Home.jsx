/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "url:../images/black.jpg";

const imageAltText = "Portrait of Dolapo Mosuro";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="hero min-height">
      <div className="hero-copy">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>
          I create thoughtful digital experiences that bring together accessible design,
          reliable code, and clear visual storytelling.
        </p>
        <a className="cta-button" href="#portfolio">
          View my work
        </a>
      </div>
      <div className="hero-portrait-frame">
        <span className="accent accent-lemon" aria-hidden="true" />
        <span className="accent accent-green" aria-hidden="true" />
        <span className="accent accent-red" aria-hidden="true" />
        <img className="hero-portrait" src={image} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
