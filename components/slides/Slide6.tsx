import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slideAnimation = keyframes`
  0% { transform: translateX(0); }
  27.3% { transform: translateX(calc(1 / 3 * -100%)); }
  33.3% { transform: translateX(calc(1 / 3 * -100%)); }
  60.6% { transform: translateX(calc(2 / 3 * -100%)); }
  66.6% { transform: translateX(calc(2 / 3 * -100%)); }
  94% { transform: translateX(calc(3 / 3 * -100%)); }
  100% { transform: translateX(calc(3 / 3 * -100%)); }
`;

const slideMainAnimation = keyframes`
  0% { transform: translateX(100%); }
  66.6% { transform: translateX(100%); }
  94% { transform: translateX(0%); }
`;

const CarouselSlider = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
`;

const SlideWrap = styled.div`
  width: 300%;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  z-index: 0;
  animation: ${slideAnimation} 15s infinite;
  animation-delay: 2s;
`;

const SlideWrapMain = styled.div`
  width: 100%;
  z-index: 1;
  animation: ${slideMainAnimation} 15s infinite;
  animation-delay: 2s;
`;

const Slide = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  vertical-align: top;
`;

const Slider6 = () => {
  return (
    <CarouselSlider className="css-carousel-slider3">
      <SlideWrapMain className="slide-wrap-main">
        <Slide>
          <Image
            src="https://gorigoricode.com/wp-content/uploads/2022/04/husky01.jpg"
            alt=""
          />
        </Slide>
      </SlideWrapMain>
      <SlideWrap className="slide-wrap">
        <Slide>
          <Image
            src="https://gorigoricode.com/wp-content/uploads/2022/04/husky01.jpg"
            alt=""
          />
        </Slide>
        <Slide>
          <Image
            src="https://gorigoricode.com/wp-content/uploads/2022/04/husky06.jpg"
            alt=""
          />
        </Slide>
        <Slide>
          <Image
            src="https://gorigoricode.com/wp-content/uploads/2022/04/husky05.jpg"
            alt=""
          />
        </Slide>
      </SlideWrap>
    </CarouselSlider>
  );
};

export default Slider6;
