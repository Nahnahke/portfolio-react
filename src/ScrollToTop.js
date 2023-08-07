import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const MoveBtnAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(20px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const ScrollToTopContainer = styled.div`
  position: relative;
`;

const IconPosition = styled.div`
  position: fixed;
  bottom: 60px;
  left: 55px;
  z-index: 20;
`;

const IconStyle = styled(FaAngleUp)`
  background-color: #eb5577;
  border: 2px solid #fff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  color: #fff;
  cursor: pointer;
  animation: ${MoveBtnAnimation} 3s ease-in-out infinite;
  transition: all 0.5s ease-in-out;

  &:hover {
    animation: none;
    background: #fff;
    color: #eb5577;
    border: 2px solid #eb5577;
  }
`;

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollToTopContainer>
      {showTopBtn && (
        <IconPosition>
          <IconStyle onClick={goToTop} />
        </IconPosition>
      )}
    </ScrollToTopContainer>
  );
};

export default ScrollToTop;
