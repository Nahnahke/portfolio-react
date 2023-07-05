/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

const StyledProjectWrapper = styled.div`
  margin: var(--side-margins-mobile);

  @media (min-width: 667px) and (max-width: 1024px) {
  margin: auto;
  margin: var(--side-margins-tablet);
  display: flex;
  align-items: center;
  justify-content: center;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    }
`;

const ProjectContainer = styled.div`
flex-direction: row;
max-width: 900px;
gap: 30px;

@media (min-width: 667px) and (max-width: 1024px) {
  display: flex;
  flex-direction: row;
  align-items: center;
  }

@media (min-width: 1025px) {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
  max-width: 800px;
}
`

const TextContainer = styled.div`
@media (min-width: 667px) and (max-width: 1024px) {
  display: flex;
  flex-direction: column;
  }

@media (min-width: 1025px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  }
`

const StyledProjectImage = styled.img`
max-height: 600px;
width: 98%;
object-fit: cover;
object-position: 50%;

@media (min-width: 667px) and (max-width: 1024px) {
  max-height: 600px;
  width: 350px;
  height: 350px;
  object-fit: cover;
  object-position: 50%;
}

@media (min-width: 1024px) {
  width: 400px;
  height: 400px;
  object-fit: cover;
  object-position: 50%;
}
`;

const StyledProjectTitle = styled.h1`
  font-size: 32px;
  line-height: 43px;
  margin: 10px 0 10px 0;
  font-family:  'SatoshiVariable';
`;

const StyledProjectDescription = styled.p`
  font-size: 22px;
  line-height: 29px;
  margin-top: 18px;
  margin-bottom: 20px;
  font-family: 'EB Garamond', serif;
  font-weight: 400;
`;

const StyledCodeTemplates = styled.div`
  margin: 10px 0 5px 0;
  font-family: 'EB Garamond', serif;
  font-size: 22px;
  font-weight: 400;
`;

const StyledLanguages = styled.p`
  display: inline-block;
  background-color: black;
  color: white;
  margin: 0 4px 8px 0;
  padding: 2px 5px;
  vertical-align: top;
`;

const StyledLinkButton = styled.a`
background-color: #F5F5F5;
color: black;
font-family: 'SatoshiVariable';
font-weight: 500;
font-size: 20px;
line-height: 27px;
border-radius: 40px;
max-height: 45px;
margin-bottom: 1rem;
text-decoration: none;
padding: 7px 15px 7px 10px;
border: none;
width: fit-content;
display: flex;
flex-direction: row;
align-items: center;
}

.live:hover {
background: #137B8A;
color: white;
}

.git:hover {
background: #EB5577;
color: white;
}
`

const StyledIcon = styled.svg`
width: 32px;
height: 32px;
margin-right: 10px;
`

const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;

@media (min-width: 667px) and (max-width: 1024px) {
flex-direction: row;
gap: 15px;
}
`

const FeaturedProjects = ({
  imgSrc,
  title,
  description,
  languages,
  githubLink,
  netlifyLink
}) => {
  return (
    <StyledProjectWrapper>
      <ProjectContainer>
        <StyledProjectImage src={imgSrc} alt="" />
        <TextContainer>
          <StyledProjectTitle>{title}</StyledProjectTitle>
          <StyledProjectDescription>{description}</StyledProjectDescription>
          <StyledCodeTemplates>
            {languages.map((language, index) => (
              <StyledLanguages key={index}>{language}</StyledLanguages>
            ))}
          </StyledCodeTemplates>
          <ButtonWrapper>
            <StyledLinkButton href={netlifyLink} className="live" target="_blank">
              <StyledIcon fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
              </StyledIcon>
        Live demo
            </StyledLinkButton>
            <StyledLinkButton href={githubLink} className="git" target="_blank">
              <StyledIcon fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.9 2.3 1.6-1 1.6-3.6 0-5.9-1.6-2.3-4.3-3.3-5.9-2.3zm48.7-4c-1.3 1.6-.3 4.3 2.3 6.5 2.3 2.3 5.9 3 7.6 1.3 1.3-1.6.3-4.3-2.3-6.5-2.2-2-5.9-2.6-7.6-1.3zm19.7-10.4c-1.3 1-1.6 3.6-.3 6.2 1.3 2.3 3.9 3.6 5.9 2.6 1.3-1 1.6-3.6.3-6.2-1.3-2-3.9-3.3-5.9-2.4zm-18.7-10.4c-1.3 1.6-.7 4.3 1 6.5 1.6 2.3 4.6 3.3 6.5 1.6 1.3-1.6.7-4.3-1-6.5-1.7-2-4.6-2.6-6.5-1.6zm-14.5-7.3c-1.6 1.3-1.6 4.6 0 7.6 1.6 2.3 4.6 4.3 7.9 3 1.9-1.3 2.6-4.3 1.3-7.6-1.7-2.4-4.6-3.3-7.9-2zm-12.7-8.2c-1.3 1.6-.7 4.6 1.6 7.9 2.3 2.9 5.6 4.9 7.9 3.3 1.7-1.6 1-4.6-1.6-7.9-2.4-2.6-5.6-4.6-7.9-3.3zm-15.8-6.5c-1.6 1.6-1.3 5.2 1.6 8.5 2.3 3 6.2 5.2 8.5 3.6 1.7-1.6 1.3-5.2-1.6-8.5-2.2-2.9-6-4.9-8.5-3.6zm-15.9-5.3c-1.6 1.6-1 5.9 2.4 9.2 2.9 3 7.3 5.2 9.6 3.6 1.6-1.6 1-5.9-2.4-9.2-2.9-3-7.3-5.2-9.6-3.6zm-15.9-4c-1.3 1.6-1 6 2.6 9.6 3 3 7.6 5.2 10.2 3.6 1.3-1.3 1-6-2.6-9.6-3-3-7.6-5.2-10.2-3.6zm-15.9-4.7c-1.6 1.3-1.3 6 2.9 9.9 3.3 3 8 5.2 10.6 3.6 1.6-1.6 1.3-6-2.9-9.9-3.3-3-7.9-5.2-10.6-3.6zm-15.9-4.4c-1.6 1.3-1.6 6.2 0 10.2 2 3 8 5.2 10.6 3.6 1.6-1.3 1.6-6.2 0-10.2-2-2.9-7.9-5.2-10.6-3.6zm-15.9-3.7c-1.6 1.3-2 6.5-.3 11 1.6 3 8.3 5.6 10.9 4 1.6-1.3 2-6.5.3-11-1.6-2.9-8.3-5.3-10.9-4zm-15.9-3.7c-1.6 1.3-2.6 7.9-.3 12.6 1.6 3 9.2 6 11.5 4.4 1.6-1.6 2.3-7.6.6-12.3-1.7-2.6-9.2-5.3-11.8-4.7zm-15.9-3.4c-1.6 1-2.6 8.5-.7 13.9 1.6 3 9.6 6.4 12.2 4.7 1.6-1.6 2.6-8.2.7-13.6-1.6-2.9-9.7-6-12.2-4.6zm0 0" />
              </StyledIcon>
        GitHub
            </StyledLinkButton>
          </ButtonWrapper>
        </TextContainer>
      </ProjectContainer>
    </StyledProjectWrapper>
  );
};

export default FeaturedProjects;
