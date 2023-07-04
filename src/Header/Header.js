import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

library.add(fab);

const HeaderWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: 768px) and (max-width: 1024px) {
 height: 100vh;
  }

  @media (min-width: 1025px) {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }
`;

const HeroImage = styled.div`
  display: none;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: block;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 55%, 0% 80%);
    background-size: cover;
    background-position: 75%;
    margin-top: 0;
  }

  @media (min-width: 1025px) {
    display: block;
    grid-column: 2 / 3;
    grid-row: 1 / -1;
    width: 50vw;
    height: 100%;
    background-size: cover;
    background-position: 75%;
    margin-top: 0;
    overflow: hidden;
  }
`;

const CoverImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1025px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    align-items: flex-start;
    margin-top: 15rem;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 5rem;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin: -4rem 0 0 0;
  }

  @media (min-width: 1025px) {
    margin-left: var(--side-margins-desktop);
  }
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid whitesmoke;
  margin-bottom: 29px;

  @media (min-width: 768px) {
    margin: 0 1.875rem 0 0;
  }
`;

const ProfileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    margin-left: 0;
    margin-bottom: 2.5rem;
  }
`;

const Name = styled.h1`
font-size: 28px;
font-weight: 700;
line-height: 38px;
color: #137B8A;
font-family:  'SatoshiVariable';
margin-bottom: -20px;
`;

const Title = styled.h2`
font-size: 22px;
font-weight: 900;
line-height: 43px;
margin-bottom: -30px;

`;

const Introduction = styled.div`
  margin: var(--side-margins-mobile);

  @media (min-width: 768px) {
    margin: var(--side-margins-tablet);
  }
`;

const IntroText = styled.p`
font-family: 'EB Garamond', serif;
font-size: 22px;
font-weight: 400;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin: 5rem 0 10rem 0;

  @media (min-width: 768px) {
    justify-content: center;
    margin-left: 0;
  }

  a:not(:last-child) {
    margin-right: 30px;
  }

  @media (min-width: 1025px) {
    margin-bottom: 0;
  }
`;

const Icon = styled.a`
  font-size: 35px;
  color: #333;
  margin-right: 30px;

  &:hover {
    color: #999;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeroImage aria-hidden="true">
        <CoverImage src="/images/hero-image.jpg" alt="portfolio cover" />
      </HeroImage>
      <ProfileContainer>
        <ProfileWrapper>
          <ProfilePic src="/images/profile-picture.jpg" alt="profile of Hannah Ek" />
          <ProfileContentWrapper>
            <Name>Hannah Ek</Name>
            <Title>Fullstack Developer</Title>
          </ProfileContentWrapper>
        </ProfileWrapper>
        <Introduction lang="en-US">
          <IntroText>
            Meet Hannah - a skilled web developer with a diverse
            professional background. With experience in sales,
            e-commerce and production in Asia, and now in the
            field of frontend development, Hannah brings a unique
            perspective and skill set to her work. A quick learner,
            Hannah is passionate about creating engaging and
            dynamic web experiences that leave a lasting impression
             on users. With a sharp eye for detail and a dedication
            to quality, Hannah is a valuable asset to any team she
            works with.
          </IntroText>
          <ContactContainer>
            <Icon
              hrefLang="en-US"
              title="link to Hannah Ek's LinkedIn page"
              href="https://www.linkedin.com/in/hannah-ek-91667434/"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </Icon>
            <Icon
              hrefLang="en-US"
              title="link to Hannah Ek's Github page"
              href="https://github.com/Nahnahke"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </Icon>
            <Icon
              hrefLang="en-US"
              title="link to Hannah Ek's Stack Overflow page"
              href="https://stackoverflowteams.com/c/technigo/users/457/?tab=profile"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
            </Icon>
          </ContactContainer>
        </Introduction>
      </ProfileContainer>
    </HeaderWrapper>
  );
};

export default Header;
