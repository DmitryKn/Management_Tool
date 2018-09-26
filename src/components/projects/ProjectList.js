import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
  const lister = projects.map(project => {
    return (
      <ProjectSummary 
       project={project} 
       key={project.id}
      />
    )

  })
  return(
    <div className="project-list section">
      {lister}
    </div>
  )
};

export default ProjectList;


