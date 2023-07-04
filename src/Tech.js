import React from 'react';
import styled from 'styled-components';

const TechWrapper = styled.section`
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EDFFFF;
`;

const Title = styled.h3`
  font-size: 80px;
  line-height: 108px;
  font-weight: 700;
  color: #EB5577;
`;

const TechText = styled.p`
  margin: var(--side-margins-mobile);
  margin: 0;
  font-family: 'EB Garamond', serif;
  font-size: 22px;
  font-weight: 400;

  @media (min-width: 768px) {
    margin: 0 120px;
  }

  @media (min-width: 1025px) {
    width: 100%;
    max-width: 800px;
    margin-right: 100px;
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

const Tech = () => {
  return (
    <TechWrapper lang="en-US" title="information about Hannah's tech-stack" aria-label="Information about tech-stack">
      <Title>Tech</Title>
      <TechText>
        HTML, CSS, Flexbox, <PinkMark>Javascript</PinkMark>, ES6, JSX, <RedMark>React</RedMark>
        , React Hooks, Redux, <BlueMark>Redux Toolkit</BlueMark>
        , Node.js, MongoDB, Express.js, Web Accessibility, Restful APIs, pair-programming, Github.
      </TechText>
    </TechWrapper>
  );
};

export default Tech;
