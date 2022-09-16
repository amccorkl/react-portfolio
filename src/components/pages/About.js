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
      <article className="about-education">
        <div className="card-body">
          <h2>Education</h2>
          <div className="grid-container">
            <div className="school">Denver University</div>
            <div className="study">Full Stack Web Development</div>
          </div>

          <div className="grid-container">
            <div className="school">Colorado Mesa University</div>
            <div className="study">Masters in Education and Management (Principal License)</div>
          </div>

          <div className="grid-container">
            <div className="school">Colorado State University</div>
            <div className="study">Masters in History</div>
          </div>
        </div>
      </article>
          
    </section>
  );
};

export default About;