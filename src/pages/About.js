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
                <img className="picture" src={Pic} alt="headshot" id="picture" />

              </div>
            </div>

            <div className="card-body">
              <div className="row card-row">
                <p className="para-aboutMe">I am a 20 year veteran teacher, instructional coach, problem solver, and now creator of code. I thrive off of pushing myself and helping others. This foray into full stack coding provides ample opportunities for growth. I can't wait to join an organization that helps support people through IT and software development.
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