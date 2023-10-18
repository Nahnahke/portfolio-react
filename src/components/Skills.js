import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  background-color: #E1E9EA;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 60px;
`;

const StyledHeader = styled.header`
  color: #137B8A;
  text-align: center;
  margin: 60px auto 25px auto;
  font-size: 80px;
  font-weight: 700;
  line-height: 108px;
  margin: 0 0 0 20px;
`

const SkillListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 60px;

  @media (min-width: 667px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    align-items: start;
    justify-content: center;
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: center; 
    align-items: flex-start; 
    gap: 4rem;
    margin: var(--side-margins-desktop);
  }
`;

const StyledCodeDt = styled.dt`
  display: inline-block;
  font-size: 24px;
  margin: 0 0 15px 0;
  color: white;
  padding: 2px 6px;
  font-family: 'SatoshiVariable';
  background-color: #EB5577;
`

const StyledToolboxDt = styled.dt`
  display: inline-block;
  font-size: 24px;
  margin: 0 0 15px 0;
  color: white;
  padding: 2px 6px;
  font-family: 'SatoshiVariable';
  background-color: lightblue;
`

const StyledMoreDt = styled.dt`
  display: inline-block;
  font-size: 24px;
  margin: 0 0 15px 0;
  color: white;
  padding: 2px 6px;
  font-family: 'SatoshiVariable';
  background-color: darkblue;
`

const StyledUpcomingDt = styled.dt`
  display: inline-block;
  font-size: 24px;
  margin: 0 0 15px 0;
  color: white;
  padding: 2px 6px;
  font-family: 'SatoshiVariable';
  background-color: green;
`

const StyledDd = styled.dd`
margin: 0;
font-size: 22px;
font-family: 'EB Garamond', serif;
`

const Skills = () => {
  return (
    <SkillsContainer>
      <StyledHeader>Skills</StyledHeader>
      <SkillListContainer>
        <dl className="Code slide-in-left">
          <StyledCodeDt>Code</StyledCodeDt>
          <StyledDd lang="en">HTML5</StyledDd>
          <StyledDd lang="en">CSS3</StyledDd>
          <StyledDd lang="en">Javascript ES6</StyledDd>
          <StyledDd lang="en">Styled Components</StyledDd>
          <StyledDd lang="en">React</StyledDd>
          <StyledDd lang="en">Redux</StyledDd>
          <StyledDd lang="en">Node.js</StyledDd>
          <StyledDd lang="en">MongoDB</StyledDd>
          <StyledDd lang="en">Express.js</StyledDd>
        </dl>
        <dl className="Toolbox">
          <StyledToolboxDt>Toolbox</StyledToolboxDt>
          <StyledDd lang="en">Github</StyledDd>
          <StyledDd lang="en">VS Code</StyledDd>
          <StyledDd lang="en">Stack Overflow</StyledDd>
          <StyledDd lang="en">Figma</StyledDd>
          <StyledDd lang="en">ChatGPT</StyledDd>
          <StyledDd lang="en">Postman</StyledDd>
          <StyledDd lang="en">Compass</StyledDd>
          <StyledDd lang="en">Atlas</StyledDd>
          <StyledDd lang="en">Google Cloud Platform</StyledDd>
        </dl>
        <dl className="More">
          <StyledMoreDt>More</StyledMoreDt>
          <StyledDd lang="en">Agile Methodology</StyledDd>
          <StyledDd lang="en">Project Management</StyledDd>
          <StyledDd lang="en">Concept Developement</StyledDd>
          <StyledDd lang="en">Database Management</StyledDd>
          <StyledDd lang="en">Mob-programming</StyledDd>
          <StyledDd lang="en">Pair-programming</StyledDd>
          <StyledDd lang="en">Git</StyledDd>
          <StyledDd lang="en">Sales</StyledDd>
        </dl>
        <dl className="Upcoming">
          <StyledUpcomingDt>Upcoming</StyledUpcomingDt>
          <StyledDd lang="en">Next.js</StyledDd>
          <StyledDd lang="en">React Native</StyledDd>
          <StyledDd lang="en">TypeScript</StyledDd>
          <StyledDd lang="en">Sanity</StyledDd>
        </dl>
      </SkillListContainer>
    </SkillsContainer>
  )
};

export default Skills;
