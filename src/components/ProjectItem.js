import React from "react";

//   const { name, about, technologies } = props.projects
function ProjectItem({ name, about, technologies }) {
  console.log(name)
  const technologiesItem = technologies.map((technology) => {
    return (
    <span>
      {technology}
    </span>)
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesItem}
      </div>
    </div>
  );
}

export default ProjectItem;
