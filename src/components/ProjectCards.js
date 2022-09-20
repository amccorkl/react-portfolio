import React from 'react';
// import Projects from '../pages/Projects';
import '../App.css';

function ProjectCards(props) {
   return (
     <div className={`grid-item gallery ${props.id}`}>
       <img src={props.image} alt={props.title} className="gallery-img" />
       <div className="description">
         <h4>{props.title}</h4>
       </div>

       <div className="links">
         <a href={props.github} target="_blank" rel="noreferrer" alt="Github Repository">Github Repository</a>
         <a href={props.deployed} target="_blank" rel="noreferrer" alt="Deployed app">Deployed App</a>
       </div>
   </div>
   );
 }

export default ProjectCards;