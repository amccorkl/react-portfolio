import React from "react";
import ConcertConcierge from "../images/concert-concierge.png";
import CacheFoodDecisions from "../images/login-page.jpeg";
import Insomnia from "../images/insomnia-all-users.png";
import ProjectCards from "../components/ProjectCards"
import "../styles/projects.css";
 
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Concert Concierge",
      repo: "https://github.com/amccorkl/Concert_Concierge/",
      deployed: "https://amccorkl.github.io/Concert_Concierge/",
      image: ConcertConcierge,
    },
    {
      id: 2,
      title: "Cache Food Decisions",
      repo: "https://github.com/amccorkl/cache-food-decisions",
      deployed: "http://damp-harbor-49836.herokuapp.com/",
      image: CacheFoodDecisions,
    },
    {
      id: 3,
      title: "Social Networking API",
      repo: "https://github.com/amccorkl/Social-NetWorking-API",
      deployed: "backend only",
      image: Insomnia,
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
                  <div className="container-projects">
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

