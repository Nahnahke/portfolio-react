import React from 'react';
import styled from 'styled-components';

const TechWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EDFFFF;
  z-index: 1;
`;

const Title = styled.h3`
  font-size: 80px;
  line-height: 108px;
  font-weight: 700;
  color: #EB5577;
`;

const TechText = styled.p`
margin: var(--side-margins-mobile);
  font-family: 'EB Garamond', serif;
  font-size: 22px;
  font-weight: 400;

  @media (min-width: 768px) {
    margin: var(--side-margins-tablet);
  }

  @media (min-width: 1025px) {
    margin: var(--side-margins-desktop);
    max-width: 800px;
  }
`;

const PinkMark = styled.mark`
  background-color: pink;
  padding: 3px;
  color: #FFFFFF;
`;

const RedMark = styled.mark`
  background-color: red;
  padding: 3px;
  color: #FFFFFF;
`;

const BlueMark = styled.mark`
  background-color: blue;
  padding: 3px;
  color: #FFFFFF;
`;

const GreenMark = styled.mark`
  background-color: green;
  padding: 3px;
  color: #FFFFFF;
`;

const Tech = () => {
  return (
    <TechWrapper lang="en-US" title="information about Hannah's tech-stack" aria-label="Information about tech-stack">
      <Title>Tech</Title>
      <TechText>
        HTML, CSS, Flexbox, <PinkMark>Javascript ES6</PinkMark>, JSX, <RedMark>React</RedMark>,
        Responsive Design, React Hooks, Redux, Redux Toolkit
        , <BlueMark>Node.js</BlueMark>, MongoDB, Express.js, Web Accessibility,
        <GreenMark>Restful API:s</GreenMark>,
        mob- and pair-programming, Github.
      </TechText>
    </TechWrapper>
  );
};

export default Tech;
