import React from 'react';
import styled from 'styled-components';
import { LuMouse, LuArrowDown } from 'react-icons/lu';

const Info = () => {
  return (
    <InfoContent>
      <AboutMe>
        <Name>
          <h1>박정민</h1>
          <p>Web Frontend Developer</p>
        </Name>

        <Contact>
          <ul>
            <li>
              <span>Email</span>plou102@naver.com
            </li>
            <li>
              <span>Mobile</span>010-9049-3594
            </li>
            <li>
              <span>GitHub</span>
              <p onClick={() => window.open('https://github.com/plou102')}>
                https://github.com/plou102
              </p>
            </li>
          </ul>
        </Contact>
      </AboutMe>

      <Introduction>
        <div>안녕하세요! 신입 프론트엔드 개발자 박정민입니다.</div>
        <div>
          새로운 기술을 배우는 것을 좋아해 프로젝트에서 새로운 기술을 도입해 보며 진행하고 있습니다.
        </div>
        <div>
          모두가 보기 쉬운 코드가 좋은 코드라고 생각하여, 어떻게 해야 가독성이 좋아지는지 고민하고
          적용하고자 합니다.
        </div>
      </Introduction>

      <DownBtn>
        <LuMouse size="50" />
        <LuArrowDown size="40" className="arrow" />
      </DownBtn>
    </InfoContent>
  );
};

export default Info;

const InfoContent = styled.div`
  height: 100vh;
  background-color: #f6e3ce;
`;

const AboutMe = styled.div`
  display: flex;
  margin-bottom: 10vh;
  gap: 20vh;
  padding: 30vh 0 0 30vh;
`;

const Name = styled.div`
  h1 {
    font-size: 5rem;
    margin: 0;
  }

  p {
    font-weight: 600;
    font-size: 2rem;
    margin: 0;
  }
`;

const Contact = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
    height: 100%;
  }

  li {
    list-style: none;
    font-size: 1.3rem;
  }

  span {
    display: inline-block;
    font-weight: 600;
    margin-right: 20px;
    font-size: 1.5rem;
    width: 80px;
  }

  p {
    display: inline;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.7rem;
  padding-left: 30vh;
  margin-bottom: 20vh;
`;

const DownBtn = styled.div`
  width: 50px;
  margin: auto;
  position: relative;

  &:hover {
    .arrow {
      transform: translateY(15px);
    }
  }

  .arrow {
    position: absolute;
    width: 50px;
    top: 28px;
    left: 0;
    transition: all 0.3s ease-in-out;
  }
`;
