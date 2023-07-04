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
color: #137B8A;
font-size: 26px;
font-weight: 300;
line-height: 30px;
`;

const FooterHeading3 = styled.h3`
font-family:  'SatoshiVariable';
margin: 0 0 0 20px;
font-size: 20px;
font-weight: 300;
line-height: 30px;
`;

const FooterHeading4 = styled.h4`
font-family:  'SatoshiVariable';
margin: 0 0 0 20px;
font-size: 20px;
font-weight: 300;
line-height: 30px;
`;

const Profile = () => {
  return (
    <ProfileText>
      <FooterHeading2>Hannah Ek</FooterHeading2>
      <FooterHeading3>Frontend developer</FooterHeading3>
      <FooterHeading4>with a background in sales and e-commerce</FooterHeading4>
    </ProfileText>
  )
};

export default Profile;