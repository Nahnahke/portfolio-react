import React from 'react';
import styled from 'styled-components';
import vector from './Assets/vector.svg';

const Scroll = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const ArrowDown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10%;
  left: 48.3%;
  top: 110%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0;
  z-index: 1;
  animation: bounce 1s infinite alternate;

  @media (min-width: 330px) and (max-width: 350px) {
    top: 100%;
  }

  @media (min-width: 351px) and (max-width: 370px) {
    top: 95%;
  }

  @media (min-width: 371px) and (max-width: 390px) {
    top: 96%;
  }

  @media (min-width: 391px) and (max-width: 410px) {
    top: 95%;
  }

  @media (min-width: 411px) and (max-width: 430px) {
    top: 93%;
  }

  @media (min-width: 431px) and (max-width: 450px) {
    top: 92%;
  }

  @media (min-width: 451px) and (max-width: 480px) {
    top: 91%;
  }

  @media (min-width: 481px) and (max-width: 500px) {
    top: 90%;
  }

  @media (min-width: 501px) and (max-width: 530px) {
    top: 82%;
  }

  @media (min-width: 531px) and (max-width: 650px) {
    top: 82%;
  }

  @media (min-width: 651px) and (max-width: 767px) {
    top: 74%;
  }
  `;

const ArrowText = styled.a`
font-family: 'SatoshiVariable';
text-decoration: underline;
font-weight: 900;
font-size: 16px;
line-height: 22px;
color: #0B24F5;
display: inline;
`

const ArrowImage = styled.img`
align-items: center;

@keyframes bounce {
    0%   {transform: translateY(0);}
    100% {transform: translateY(50px);}
  }
  .scroller img {
    background-color: transparent;
    height: 20px;
}
`

const LetsScroll = () => {
  return (
    <Scroll>
      <ArrowDown>
        <ArrowImage
          src={vector}
          alt="arrow icon for scrolling" />
        <ArrowText>
          <a href="#tech" className="arrowtext" aria-label="scroll down to first page after header">
            <p style={{ display: 'inline' }}>Lets scroll!</p>
          </a>
        </ArrowText>
      </ArrowDown>
    </Scroll>
  );
};

export default LetsScroll;
