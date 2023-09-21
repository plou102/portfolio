import React from 'react';
import styled from 'styled-components';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { MdOutlineCancel } from 'react-icons/md';

const Modal = ({ images, index, setIndex, setIsModal }) => {
  const length = images.length;
  const viewImage = images[index];

  return (
    <Background>
      <ModalContent>
        <BackContent onClick={() => setIsModal(false)}>
          <MdOutlineCancel size="30" />
        </BackContent>

        <Viewer>
          <Prev onClick={() => index > 0 && setIndex(index - 1)}>
            <HiArrowLeft size="40" />
          </Prev>
          <ViewImg src={viewImage} alt="current Image" />
          <Next onClick={() => index < length - 1 && setIndex(index + 1)}>
            <HiArrowRight size="40" />
          </Next>
        </Viewer>

        <Thumbnails>
          {images.map((item, index) => {
            if (index < 6) {
              return <Img src={item} alt="market image" />;
            }
          })}
        </Thumbnails>
      </ModalContent>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 80%;
  height: 90%;
  border-radius: 20px;
`;

const BackContent = styled.div`
  display: flex;
  padding: 15px;
  width: 30px;
  margin-left: 95%;
  cursor: pointer;

  svg {
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(120%);
    }
  }
`;

const Viewer = styled.div`
  height: 75%;
  display: flex;
  justify-content: space-around;
`;

const Prev = styled.div`
  margin: auto;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateX(-20px);
  }
`;

const Next = styled.div`
  margin: auto;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateX(20px);
  }
`;

const ViewImg = styled.img`
  width: auto;
  max-width: 70%;
  max-height: 100%;
  margin: auto;
`;

const Thumbnails = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 15vh;
  margin-right: 1vh;
`;
