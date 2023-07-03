import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterSection = styled.section`
  background-color: white;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: var(--side-margins-mobile);
`;

const FooterHeading = styled.h1`
  font-size: 68px;
  font-weight: 900;
  line-height: 78px;
  color: #EB5577;
  margin-bottom: 20px;
  margin-top: 40px;
  text-align: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  max-width: 150px;
  max-height: 150px;
  margin-bottom: 20px;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0 auto 10px;
`;

const FooterHeading2 = styled.h2`
  margin: 10px 0 0 0;
`;

const FooterHeading3 = styled.h3`
  margin: 0;
`;

const FooterHeading4 = styled.h4`
  font-size: 24px;
  line-height: 33px;
  color: #565656;
  margin: 0;
`;

const Icon = styled.a`
  font-size: 35px;
  color: #333;
  margin-right: 30px;

  &:hover {
    color: #999;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterHeading>Time to talk</FooterHeading>
      <ProfileContainer>
        <ProfileImage
          title="image"
          src="/images/profile-picture.jpg"
          alt="Photo of Hannah"
          className="personal-photo" />
        <ProfileText>
          <FooterHeading2>Hannah Ek</FooterHeading2>
          <FooterHeading3>Frontend developer</FooterHeading3>
          <FooterHeading4>with a background in sales and production</FooterHeading4>
        </ProfileText>
      </ProfileContainer>

      <p><a href="tel:+46(0)706 711 804">+46 (0)706 711 804</a></p>
      <p><a href="mailto:ekhannahek@gmail.com">ekhannahek@gmail.com</a></p>

      <div className="links">
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
      </div>
    </FooterSection>
  );
};

export default Footer;
