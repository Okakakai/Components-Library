import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

//https://www.esz.co.jp/blog/185.html

const MainImgBox = styled.div`
  height: 400px;
  overflow: hidden;
  position: relative;
`;

const anime = keyframes`
  0% {
    z-index: 10;
    transform: translateX(0);
  }
  25% {

     z-index: 9;
  }
  50% {
    /* opacity: 0;
    transform: scale(1);
    z-index: 0; */
    transform: translateX(0);
    z-index: 9;
  }
  100%{
    opacity: 0;
    transform: translateX(-100%);
    z-index: 9;
  }
`;

const MainImg = styled.div`
  z-index: 10;
  opacity: 1;
  transform: translateX(-100%);
  width: 100%;
  scale: 1.2;
  height: 400px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${anime} 10s 0s infinite;
`;

const FirstImage = styled(MainImg)``;

const SecondImage = styled(MainImg)`
  animation-delay: 5s;
`;

const Slider7 = () => {
  return (
    <MainImgBox>
      <FirstImage
        style={{
          backgroundImage:
            'url(https://gorigoricode.com/wp-content/uploads/2022/04/husky01.jpg)',
        }}
      />
      <SecondImage
        style={{
          backgroundImage:
            'url(https://gorigoricode.com/wp-content/uploads/2022/04/husky05.jpg)',
        }}
      />
      {/* <ThirdImage
        style={{
          backgroundImage:
            'url(https://gorigoricode.com/wp-content/uploads/2022/04/husky06.jpg)',
        }}
      /> */}
    </MainImgBox>
  );
};

export default Slider7;
