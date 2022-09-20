import React from 'react';
// import Projects from '../pages/Projects';
import '../App.css';

function ProjectCards(props) {

  const project = props.project;

   return (
     <div className={`grid-item gallery ${project.id}`}>
       <img src={project.image} alt={project.title} className="gallery-img" />
       <div className="description">
         <h4>{project.title}</h4>
       </div>

       <div className="links">
         <a href={project.github} target="_blank" rel="noreferrer" alt="Github Repository">Github Repository</a>
         <a href={project.deployed} target="_blank" rel="noreferrer" alt="Deployed app">Deployed App</a>
       </div>
   </div>
   );
 }

export default ProjectCards;