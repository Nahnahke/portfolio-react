import React from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterSection = styled.section`
  background-color: white;
  min-height: 800px;
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: ${({ theme }) => theme['--side-margins-mobile']} 0;

  @media (max-width: 767px) {
    justify-content: center; 
    padding: 0;
  }
`;

const FooterHeading = styled.h1`
  font-size: 68px;
  font-weight: 900;
  line-height: 78px;
  color: #eb5577;
  margin-bottom: 20px;
  margin-top: 40px;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 90px;
    line-height: normal;
    margin-bottom: 50px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 100px;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
  }

  @media (min-width: 1025px) {
    align-items: center;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  max-width: 150px;
  max-height: 150px;
  margin-bottom: 20px;
  margin-left: 30px;

  @media (min-width: 768px) and (max-width: 1024px) {
    border-radius: 50%;
    max-width: 164px;
    max-height: 164px;
    margin-right: 29px;
    margin-left: 0;
  }
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0 auto 10px;
  margin-left: 30px;
`;

const FooterHeading2 = styled.h2`
font-family:  'SatoshiVariable';
margin: 0 0 0 20px;
color: #137B8A;
`;

const FooterHeading3 = styled.h3`
font-family:  'SatoshiVariable';
margin: 0 0 0 20px;
`;

const FooterHeading4 = styled.h4`
font-family:  'SatoshiVariable';
margin: 0 0 0 20px;
`;

const PhoneNumber = styled.p`
margin: 0;
font-family: 'EB Garamond', serif;
font-size: 22px;
font-weight: 400;

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: #999;
    }
  }
`;

const Email = styled.p`
margin: 0;
font-family: 'EB Garamond', serif;
font-size: 22px;
font-weight: 400;

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: #999;
    }
  }
`;

const LinksContainer = styled.div`
margin-left: 30px;
margin-top: 50px;
`

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
          <FooterHeading4>with a background in sales and e-commerce</FooterHeading4>
        </ProfileText>
      </ProfileContainer>

      <PhoneNumber>
        <a href="tel:+46(0)706 711 804">+46 (0)706 711 804</a>
      </PhoneNumber>
      <Email>
        <a href="mailto:ekhannahek@gmail.com">ekhannahek@gmail.com</a>
      </Email>

      <LinksContainer>
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
      </LinksContainer>
    </FooterSection>
  );
};

export default Footer;
