/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Projects } from './Projects';
import FeaturedProjects from './FeaturedProjects.js';

const StyledHeader = styled.h1`
  font-size: 72px;
  line-height: 80px;
  margin: 64px 0 64px 0;
  text-align: center;
  color: #137B8A;
`;

const flicker1 = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  41.99% {
    opacity: 1;
  }
  42% {
    opacity: 0;
  }
  43% {
    opacity: 0;
  }
  43.01% {
    opacity: 1;
  }
  47.99% {
    opacity: 1;
  }
  48% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  49.01% {
    opacity: 1;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 4rem 0;

  .cdp {
    position: relative;
    text-align: center;
    font-size: 0;

    &_i {
      font-family: 'SatoshiVariable';
      text-decoration: none;
      transition: background 250ms;
      display: inline-block;
      text-transform: uppercase;
      margin: 0 3px 6px;
      height: 50px;
      width: 20px;
      border-radius: 50%;
      line-height: 50px;
      font-weight: 500;
      font-size: 18px;
      padding: 0;
      border: 2px solid #137B8A;
      background-color: #F5F5F5;
      color: #137B8A;
      font-weight: 800;
      letter-spacing: .03em;
      display: none;

      &:first-child,
      &:last-child {
        padding: 0 16px;
        margin: 0 12px 6px;
      }

      &:last-child,
      &:nth-child(2),
      &:nth-last-child(2) {
        display: inline-block;
      }

      &.flicker-1 {
        animation: ${flicker1} 2s linear infinite both;
      }

      &.active {
        animation: ${flicker1} 2s linear infinite both;
      }
    }

    &_i:hover {
      background-color: #EB5577;
      color: #fff;
      border: 2px solid #F5F5F5;
    }

    &:not([data-actpage="1"]) &_i:nth-child(1) {
      display: inline-block;
    }
  }
`;

const FeaturedProjectsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [clickedButton, setClickedButton] = useState(null);
  const projectsPerPage = 7;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = Projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setClickedButton(pageNumber);
    setTimeout(() => {
      setClickedButton(null);
    }, 2000);
  };

  const totalPages = Math.ceil(Projects.length / projectsPerPage);

  return (
    <section lang="en-US" title="List of Hannah's featured projects">
      <StyledHeader>Featured Projects</StyledHeader>
      <PaginationContainer>
        <div className="cdp" data-actpage={`${currentPage}`}>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <a
              key={pageNumber}
              href={`#!${pageNumber}`}
              className={`cdp_i ${clickedButton === pageNumber ? 'active' : ''}`}
              onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </a>
          ))}
        </div>
      </PaginationContainer>
      {currentProjects.map((project, index) => (
        <FeaturedProjects
          key={index}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          languages={project.languages}
          githubLink={project.githubLink}
          netlifyLink={project.netlifyLink} />
      ))}
      <PaginationContainer>
        <div className="cdp" data-actpage={`${currentPage}`}>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <a
              key={pageNumber}
              href={`#!${pageNumber}`}
              className={`cdp_i ${clickedButton === pageNumber ? 'active' : ''}`}
              onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </a>
          ))}
        </div>
      </PaginationContainer>
    </section>
  );
};

export default FeaturedProjectsList;
