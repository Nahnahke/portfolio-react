/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { Projects } from './Projects'
import FeaturedProjects from './FeaturedProjects.js';

const StyledHeader = styled.h1`
font-size: 72px;
line-height: 80px;
margin: 64px 0 64px 0;
text-align: center;
color:#137B8A;
`

const FeaturedProjectsList = () => {
  return (
    <section lang="en-US" title="List of Hannah's featured projects">
      <StyledHeader>Featured Projects</StyledHeader>
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