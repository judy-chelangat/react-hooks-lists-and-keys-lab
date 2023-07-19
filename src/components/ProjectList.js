import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const ProjectEach =projects.map((proj)=>{
    return(
    <ProjectItem key={proj.id} technologies={proj.technologies} name={proj.name} about={proj.about}/>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {ProjectEach}
      </div>
     
    </div>
  );
}

export default ProjectList;
