/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
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
  margin: 0;
`;

const TechText = styled.p`
  margin: var(--side-margins-mobile);
  font-family: 'EB Garamond', serif;
  font-size: 22px;
  font-weight: 400;
  white-space: nowrap;

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
const line2 = ', Redux, Redux Toolkit, MongoDB, Express.js, Web Accessibility,';
const highlightedTextBlue = <BlueMark>Node.js</BlueMark>;
const line3 = ', mob- and pair-programming, Github.';
const highlightedTextGreen = <GreenMark>Restful API:s</GreenMark>;

const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  @media (min-width: 1025px) {
    flex-basis: 30%;
  }
`;

const Tech = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    observer.observe(document.querySelector('#tech-section'));

    return () => {
      observer.disconnect();
    };
  }, []);

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
        duration: 1
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

  return (
    <TechWrapper
      lang="en-US"
      title="information about Hannah's tech-stack"
      aria-label="Information about tech-stack"
      id="tech-section">
      <TechContainer>
        <TitleContainer>
          <Title>Tech</Title>
        </TitleContainer>
        <TechText>
          <motion.span
            className="load-screen--message"
            variants={sentence}
            initial={isVisible ? 'visible' : 'hidden'}
            animate={isVisible ? 'visible' : 'hidden'}>
            {line1.split('').map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))}
            {highlightedTextPink}
            <motion.span key="jsx" variants={letter}>
              {highlightedTextJSX}
            </motion.span>
            {highlightedTextRed}
            {remainingLine1.split('').map((char, index) => (
              <motion.span key={`remaining-${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))}
            <br />
            {highlightedTextBlue}
            {line2.split('').map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))}
            <br />
            {highlightedTextGreen}
            {line3.split('').map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        </TechText>
      </TechContainer>
    </TechWrapper>
  );
};

export default Tech;
