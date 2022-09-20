import React from "react";
import ConcertConcierge from "../images/concert-concierge.png";
import CacheFoodDecisions from "../images/login-page.jpeg";
import ProjectCards from "../components/ProjectCards"
 
const Projects = () => {
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
      title: "project2",
      repo: "",
      deployed: "",
      image: CacheFoodDecisions,
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
    return (
      <div className="main-container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="header">
                  <h3>Projects</h3>
                </div>
                  <div className="grid-container vertical-line">
                    {projects.map((project) => (
                      <ProjectCards
                        id={project.id}
                        key={project.id}
                        image={project.image}
                        title={project.name}
                        repo={project.repo}
                        deployed={project.deployed}
                      />
                    ))}
                  </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    );
  };

export default Projects;

