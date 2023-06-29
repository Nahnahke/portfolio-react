import React from 'react';

const FeaturedProjects = ({ imgSrc, title, description, languages, githubLink, netlifyLink }) => {
  return (
    <div className="project-wrapper">
      <img src={imgSrc} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{languages}</p>
      <a>{githubLink}</a>
      <a>{netlifyLink}</a>
    </div>
  )
};

export default FeaturedProjects;