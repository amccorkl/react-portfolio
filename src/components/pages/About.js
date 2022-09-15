import React from 'react';


const About = () => {
  return (
    <section className="main-container">
      <div id="about" className="row">
        <img src="" alt="" id="picture" />
      </div>
      <article className="about-container">
        <h1>About Me</h1>
        <p className="about-text">
          About me statement
        </p>
      </article>
      <article className="about-links">
        <p>
          <a href="http://www.github.com/amccorkl" target="_blank" rel="noreferrer noopener">
            Github Repository
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/annelinger" target="_blank" rel="noreferrer noopener">LinkedIn</a>
        </p>
      </article>
          
    </section>
  );
};

export default About;