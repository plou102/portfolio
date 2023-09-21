import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
  return (
    <Header>
      <Line />
      <p>{title}</p>
    </Header>
  );
};

export default Title;

const Header = styled.div`
  position: relative;

  p {
    font-size: 3rem;
    font-weight: 600;
    display: inline;
    background-color: #fff;
    padding: 0 10px;
    position: absolute;
    top: 10px;
    left: 6rem;
  }
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 3px solid #333;
  padding-top: 10vh;
  margin-bottom: 20vh;
`;
