import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const sliderAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }
  4.16% {
    opacity: 1;
  }
  33.33% {
    opacity: 1;
  }
  41.66% {
    opacity: 0;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
  }
`;

const SlideImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${sliderAnimation} 24s linear infinite;
`;

const FirstSlideImage = styled(SlideImage)`
  background-image: url(https://gorigoricode.com/wp-content/uploads/2022/04/husky01.jpg);
  animation-delay: -2s;
`;

const SecondSlideImage = styled(SlideImage)`
  background-image: url(https://gorigoricode.com/wp-content/uploads/2022/04/husky05.jpg);
  animation-delay: 6s;
`;

const ThirdSlideImage = styled(SlideImage)`
  background-image: url(https://gorigoricode.com/wp-content/uploads/2022/04/husky06.jpg);
  animation-delay: 14s;
`;

export const Slider1 = () => {
  return (
    <Slide>
      <FirstSlideImage />
      <SecondSlideImage />
      <ThirdSlideImage />
    </Slide>
  );
};
