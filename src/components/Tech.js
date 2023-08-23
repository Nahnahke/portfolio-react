/* eslint-disable prefer-template */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TechWrapper = styled.section`
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

const line1 = 'HTML, CSS, Flexbox, ';
const highlightedTextPink = <PinkMark>Javascript ES6</PinkMark>;
const highlightedTextJSX = ', JSX, ';
const highlightedTextRed = <RedMark>React</RedMark>;
const remainingLine1 = ', Responsive Design, React Hooks,';
const line2 = ', Redux, Redux Toolkit, Node.js, MongoDB, Express.js, Web Accessibility,';
const highlightedTextBlue = <BlueMark>Node.js</BlueMark>;
const line3 = ', mob- and pair-programming, Github.';
const highlightedTextGreen = <GreenMark>Restful API:s</GreenMark>;

const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08
    }
  }
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const Tech = () => {
  return (
    <TechWrapper lang="en-US" title="information about Hannah's tech-stack" aria-label="Information about tech-stack">
      <Title>Tech</Title>
      <TechText>
        <motion.span
          className="load-screen--message"
          variants={sentence}
          initial="hidden"
          animate="visible">
          {line1.split('').map((char, index) => (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          ))}
          {highlightedTextPink}
          {highlightedTextJSX.split('').map((char, index) => (
            <motion.span key={'jsx-' + char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          ))}
          {highlightedTextRed}
          {remainingLine1.split('').map((char, index) => (
            <motion.span key={'remaining-' + char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          ))}
          <br />
          {highlightedTextBlue}
          {line2.split('').map((char, index) => (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          ))}
          <br />
          {highlightedTextGreen}
          {line3.split('').map((char, index) => (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      </TechText>
    </TechWrapper>
  );
};

export default Tech;
