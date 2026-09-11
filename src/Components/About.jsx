/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm Dolapo Mosuro, a passionate Software Developer who loves coding, design, and all things creative. When I'm not glued to my computer screen, you can find me Dancing, or getting lost in a good book.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "APIs",
  "Backend development",
  "Databases",
  "JavaScript",
  "React",
  "Node.js",
  "Web design",
  "User experience",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = "I am passionate about solving problems.";

const About = () => {
  return (
    <section className="padding" id="about">
      <div className="about-card">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="about-quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
