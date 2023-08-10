import React from 'react';
import { styled } from 'styled-components';

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto 0 auto 10px;
`;

const FooterHeading2 = styled.h2`
font-family:  'SatoshiVariable';
margin: 0 0 0 20px;
font-size: 28px;
font-weight: 700;
line-height: 38px;
color: #137B8A;
`;

const FooterHeading3 = styled.h3`
font-family:  'SatoshiVariable';
margin: 0 0 0 20px;
font-size: 32px;
font-weight: 900;
line-height: 43px;
`;

const FooterHeading4 = styled.h4`
font-family:  'SatoshiVariable';
margin: 0 0 0 20px;
font-size: 24px;
font-weight: 500;
line-height: 32px;
`;

const Profile = () => {
  return (
    <ProfileText>
      <FooterHeading2>Hannah Ek</FooterHeading2>
      <FooterHeading3>Frontend developer with a backend passion</FooterHeading3>
      <FooterHeading4>with a background in sales and e-commerce</FooterHeading4>
    </ProfileText>
  )
};

export default Profile;