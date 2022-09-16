// import React from "react";
// import images from "";
// import ProjectCards from "../components/ProjectCards"
// import "..App.css"


// export default function Projects() {

//   const projects = [
//     {
//       id: 1,
//       title: "",
//       repo: "",
//       deployed: "",
//       image: 
//     },
//     {
//       id: 2,
//       title: "",
//       repo: "",
//       deployed: "",
//       image: 
//     },
//     {
//       id: 3,
//       title: "",
//       repo: "",
//       deployed: "",
//       image: 
//     },
//     {
//       id: 4,
//       title: "",
//       repo: "",
//       deployed: "",
//       image: 
//     },
//     {
//       id: 5,
//       title: "",
//       repo: "",
//       deployed: "",
//       image: 
//     }
//   ]

//   const renderProjects = () => {
//     return (
//       <div className="main-container">
//         <div className="row">
//           <div className="col">
//             <div className="card">
//               <div className="grid-container vertical-line">
//                 {projects.map((project) => (
//                   <ProjectCards id={project.id} key={project.id} image={project.image} title={project.name} repo={project.repo} deployed={project.deployed} />
//                 ))}
//               </div>

//             </div>
//           </div>
//         </div>

//       </div>
//     );
//   };
// }

// // add to it's own file in components
// // import React from 'react';

// // function ProjectCards(props) {
// //   return (
// //     <div className={`grid-item gallery" ${props.id}`}>
// //       <img src={props.image} alt={props.title} className="gallery-img" />
// //       <div className="description">
// //         <h4>{props.title}</h4>
// //       </div>

// //       <div className="links">
// //         <a href={props.github} target="_blank" alt="Github Repository">Github Repository</a>
// //         <a href={props.deployed} target="_blank" alt="Deployed app"></a>
// //       </div>
// //     </div>
// //   );
// // }

// export default ProjectCards;
