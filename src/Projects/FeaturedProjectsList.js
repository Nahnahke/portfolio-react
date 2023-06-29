/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Projects } from './Projects'
import FeaturedProjects from './FeaturedProjects.js';

const FeaturedProjectsList = () => {
  return (
    <section lang="en-US" title="List of Hannah's featured projects">
      <h1>Featured Projects</h1>
      {Projects.map((project, index) => (
        <FeaturedProjects
          key={index}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          languages={project.languages}
          githubLink={project.githubLink}
          netlifyLink={project.netlifyLink} />
      ))}
    </section>
  )
};

export default FeaturedProjectsList;