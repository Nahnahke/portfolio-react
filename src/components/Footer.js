import React from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from 'components/lib/Profile';

const FooterSection = styled.section`
  background-color: white;
  min-height: 800px;
  height: 100vh;
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: var(--side-margins-mobilr);
`;

const HeaderContainer = styled.div`
margin-bottom: 20px;
margin-top: 40px;

@media (min-width: 768px) and (max-width: 1024px) {
  margin-bottom: 50px;
}
`;

const FooterHeading = styled.h1`
  font-size: 68px;
  font-weight: 900;
  line-height: 78px;
  color: #eb5577;
  text-align: center;
  margin: var(--side-margins-mobile);

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 90px;
    line-height: normal;
  }

`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
  }
  

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 0;
  }
`;

const ProfileWrapper = styled.div`
@media (min-width: 768px) and (max-width: 1024px) {
  display: flex;
justify-content: center;
margin-bottom: 20px;
}

@media (min-width: 1025px) {
  display: flex;
justify-content: center;
margin-bottom: 45px;
}
`

const ProfileImage = styled.img`
  border-radius: 50%;
  max-width: 150px;
  max-height: 150px;
  margin-bottom: 20px;
  margin-left: 30px;

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 164px;
    max-height: 164px;
    margin-right: 29px;
    margin-bottom: 20px;
    margin-left: 0;
  }
`;

const PhoneNumber = styled.p`
font-family:  'SatoshiVariable';
margin: 0;
font-size: 18px;
font-weight: 900;
line-height: 43px;

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: #999;
    }
  }

  @media (min-width: 1025px) {
    font-size: 24px;
  }
`;

const Email = styled.p`
font-family:  'SatoshiVariable';
margin: 0;
font-size: 18px;
font-weight: 900;
line-height: 43px;

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: #999;
    }
  }

  @media (min-width: 1025px) {
    font-size: 24px;
  }
`;

const SvgContainer = styled.div`
width: 40%;
`;

const StyledSVG = styled.svg`
  width: 90px;
  height: 90px;
  margin-left: 80%;

  @media (max-width: 767px) {
    display: none;
  }
`;

const LinksContainer = styled.div`
margin-left: 30px;
margin-top: 40px;

@media (min-width: 768px) {
margin-bottom: 30px;
}
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
      <HeaderContainer>
        <FooterHeading>Let&apos;s Connect</FooterHeading>
      </HeaderContainer>
      <ProfileContainer>
        <ProfileImage
          title="image"
          src="/images/profile-picture.jpg"
          alt="Profile picture of Hannah Ek"
          className="personal-photo" />
        <ProfileWrapper>
          <Profile />
        </ProfileWrapper>
      </ProfileContainer>
      <SvgContainer>
        <StyledSVG
          width="60"
          viewBox="0 0 45 44.999999"
          height="60"
          version="1.0"
          onClick={() => {
            window.location.href = 'mailto:ekhannahek@gmail.com';
          }}>
          <g clipPath="url(#86d11957c3)">
            <path
              fill="#ee2a7b"
              d="M 31.929688 13.152344 C 31.683594 12.902344 31.316406 12.824219 30.996094 12.945312 L 13.5 19.46875 C 13.152344 19.601562 12.925781 19.929688 12.925781 20.300781 C 12.925781 20.675781 13.152344 21.011719 13.5 21.136719 L 21.132812 24.007812 L 23.984375 31.683594 C 24.117188 32.035156 24.449219 32.265625 24.816406 32.265625 C 25.1875 32.265625 25.519531 32.035156 25.644531 31.683594 L 32.136719 14.09375 C 32.253906 13.765625 32.175781 13.398438 31.929688 13.152344 Z M 16.351562 20.308594 L 27.800781 16.035156 L 21.65625 22.21875 C 21.632812 22.242188 21.617188 22.257812 21.601562 22.28125 Z M 24.816406 28.820312 L 22.851562 23.535156 C 22.875 23.519531 22.894531 23.5 22.914062 23.480469 L 29.0625 17.292969 Z M 20.308594 24.84375 C 20.65625 25.195312 20.65625 25.757812 20.308594 26.101562 L 18.300781 28.121094 C 18.128906 28.292969 17.898438 28.382812 17.671875 28.382812 C 17.441406 28.382812 17.21875 28.292969 17.042969 28.121094 C 16.691406 27.769531 16.691406 27.207031 17.042969 26.863281 L 19.050781 24.84375 C 19.398438 24.492188 19.957031 24.492188 20.308594 24.84375 Z M 20.257812 28.785156 C 20.605469 28.433594 21.164062 28.433594 21.507812 28.785156 C 21.859375 29.136719 21.859375 29.699219 21.507812 30.042969 L 19.5 32.0625 C 19.328125 32.234375 19.101562 32.324219 18.871094 32.324219 C 18.644531 32.324219 18.421875 32.234375 18.242188 32.0625 C 17.894531 31.710938 17.894531 31.148438 18.242188 30.804688 Z M 13.753906 27.171875 C 13.523438 27.171875 13.300781 27.085938 13.125 26.914062 C 12.777344 26.5625 12.777344 26 13.125 25.652344 L 15.132812 23.632812 C 15.480469 23.28125 16.042969 23.28125 16.382812 23.632812 C 16.734375 23.984375 16.734375 24.550781 16.382812 24.894531 L 14.375 26.914062 C 14.207031 27.085938 13.976562 27.171875 13.753906 27.171875 Z M 13.753906 27.171875 "
              fillOpacity="1"
              fillRule="nonzero" />
          </g>
        </StyledSVG>
      </SvgContainer>
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
