import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id; //! here we take id from app/project/:id
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">Project Title - {id}</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium voluptates non quae officia aspernatur iste hic cupiditate quidem voluptate ducimus eveniet eaque ipsa, architecto consectetur, enim asperiores porro debitis dolorem!</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
              <div>Posted by DK </div>
              <div>2nd September, 2am</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails