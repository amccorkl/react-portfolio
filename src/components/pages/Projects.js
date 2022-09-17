import React from "react";
import ConcertConcierge from "../../images/concert-concierge.png";
import ProjectCards from "../../components/ProjectCards"
import "../../App.css"


 const projects = [
    {
      id: 1,
      title: "project1",
      repo: "",
      deployed: "",
      image: ConcertConcierge,
    },
    {
      id: 2,
      title: "",
      repo: "",
      deployed: "",
      // image: ,
    },
    {
      id: 3,
      title: "",
      repo: "",
      deployed: "",
      // image: 
    },
    {
      id: 4,
      title: "",
      repo: "",
      deployed: "",
      // image: 
    },
    {
      id: 5,
      title: "",
      repo: "",
      deployed: "",
      // image: 
    }
  ];
  const Projects = () => {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="grid-container vertical-line">
                {projects.map((project) => (
                  <ProjectCards id={project.id} key={project.id} image={project.image} title={project.name} repo={project.repo} deployed={project.deployed} />
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  };

export default Projects();

