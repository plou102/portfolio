import React from 'react';
import Title from './Title';
import styled from 'styled-components';

const Education = () => {
  return (
    <EduContent>
      <Title title="Education" />

      <SubTitle>학력</SubTitle>
      <Heading>강릉원주대학교 컴퓨터공학과 졸업</Heading>
      <Date>2018. 03 ~ 2022. 02</Date>

      <SubTitle>교육 이력</SubTitle>
      <Heading>원티드 프리 온보딩 인턴십 12차</Heading>
      <Date>2023. 08 ~ 2023. 09</Date>

      <Heading>핀테크 서비스 프론트엔드 개발자 양성 과정 3기 (패스트캠퍼스)</Heading>
      <Date>2022. 09 ~ 2023. 04</Date>

      <SubTitle>자격증</SubTitle>
      <Heading>[한국산업인력공단] 정보처리기사</Heading>
      <Date>2022. 09</Date>
    </EduContent>
  );
};

export default Education;

const EduContent = styled.div`
  margin-bottom: 20vh;
`;

const SubTitle = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 0 3vh 45vh;
`;

const Heading = styled.p`
  margin-left: 45vh;
  margin-bottom: 0;
  font-size: 1.7rem;
  font-weight: 400;
`;

const Date = styled.p`
  margin: 1vh 0 7vh 45vh;
  font-size: 1.2rem;
`;
