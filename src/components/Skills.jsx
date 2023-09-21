import React from 'react';
import Title from './Title';
import styled from 'styled-components';

const Skills = () => {
  return (
    <>
      <Title title="Skills" />

      <SubTitle>Frontend</SubTitle>

      <StackContent>
        <Stack>HTML5</Stack>
        <Stack>CSS3</Stack>
        <Stack>JavaScript</Stack>
        <Stack>TypeScript</Stack>
        <Stack>React</Stack>
        <Stack>SCSS</Stack>
        <Stack>Styled-Components</Stack>
      </StackContent>

      <SubTitle>ETC</SubTitle>

      <StackContent>
        <Stack>Git</Stack>
        <Stack>Slack</Stack>
        <Stack>Discord</Stack>
        <Stack>Google Docs</Stack>
      </StackContent>
    </>
  );
};

export default Skills;

const SubTitle = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  margin-left: 45vh;
  margin-bottom: 3vh;
`;

const StackContent = styled.div`
  margin-left: 45vh;
  margin-bottom: 15vh;
`;

const Stack = styled.span`
  background-color: #f6e3ce;
  padding: 2px 5px;
  border-radius: 5px;
  margin-right: 10px;

  font-size: 1.4rem;
`;
