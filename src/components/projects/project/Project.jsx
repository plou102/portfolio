import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import Modal from 'components/Modal';
import DataContext from 'context/DataContext';

const Project = ({ item, idx }) => {
  const { images } = useContext(DataContext);
  const [index, setIndex] = useState(0);
  const [isModal, setIsModal] = useState(false);

  return (
    <MainContent>
      <Simple>
        <h1>{item.title}</h1>
        <p>{item.date}</p>
        <p>
          팀원 <b>{item.member}</b>
        </p>

        {item.githubURL && (
          <LinkText onClick={() => item.githubURL && window.open(`${item.githubURL}`)}>
            <FaGithub size="20" /> GitHub
          </LinkText>
        )}

        {item.webURL && (
          <LinkText onClick={() => item.webURL && window.open(`${item.webURL}`)}>
            <FiMonitor size="20" /> WebURL
          </LinkText>
        )}
      </Simple>

      <Detail>
        <Summary>{item.summary}</Summary>
        {item.stack.map((item, index) => {
          return <Stack key={index}>{item}</Stack>;
        })}

        <ul>
          {item.detail.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>

        {images[idx]?.map((item, index) => {
          if (index < 5) {
            return (
              <Img key={index} onClick={() => setIsModal(true)} src={item} alt="market image" />
            );
          }
        })}
      </Detail>

      {isModal && (
        <Modal images={images[idx]} index={index} setIndex={setIndex} setIsModal={setIsModal} />
      )}
    </MainContent>
  );
};

export default Project;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 10vh;
  margin-bottom: 12vh;
`;

const Simple = styled.div`
  width: 30vh;
  p {
    margin: 10px 0;
    font-size: 1.1rem;
  }
`;

const Detail = styled.div`
  width: 80vh;
  ul {
    padding-left: 20px;
    margin-bottom: 5vh;
  }

  li {
    margin: 5px 0;
    font-size: 1.2rem;
  }
`;

const LinkText = styled.p`
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-bottom: -3px;
  }
`;

const Summary = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 10px;
`;

const Stack = styled.span`
  background-color: #f6e3ce;
  padding: 2px 5px;
  border-radius: 5px;
  margin-right: 10px;
`;

const Img = styled.img`
  width: 15vh;
  height: 10vh;
  margin-right: 1vh;
  cursor: pointer;
`;
