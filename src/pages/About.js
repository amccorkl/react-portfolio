import React from 'react';
import Pic from '../images/profilepic.jpeg';


const About = () => {
  return (
    <div className="container-fluid">
      <div classname='row justify-content-evenly'>
        <div className="col">
          <div className="card">

            <div className="card-body">
              <div className="row card-row col-4">
                <img className="picture" src={Pic} alt="picture of me" id="picture" />

              </div>
            </div>

            <div className="card-body">
              <div className="row card-row">
                <p className="para-aboutMe">Where I say stuff about me
                </p>
              <p>
                <a href="http://www.github.com/amccorkl" target="_blank" rel="noreferrer noopener">
                  Github Repository
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/annelinger" target="_blank" rel="noreferrer noopener">LinkedIn</a>
              </p>
              </div>
            </div>

            <div className="card-body">
              <div className="row card-row">
                <h2 className="edu">Education</h2>
                <br />
                <div className="grid-container">
                  
                  <div className="grid-item">
                    <div className="school">University of Denver</div>
                    <div className="degree">Full Stack Web Development</div>
                  </div>
                  <br />

                  <div className="grid-item">
                    <div className="school">Colorado Mesa University</div>
                    <div className="degree">Master's in Educational Leadership and Management</div>
                  </div>
                  <br />

                  <div className="grid-item">
                    <div className="school">Colorado State University</div>
                    <div className="degree">Master's in History</div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  
  );
};

export default About;