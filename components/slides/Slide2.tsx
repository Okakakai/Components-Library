import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const SliderContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const sliderAnime = keyframes`
    0%{
 
    }
    16.6%{
        transform: translateX(0);
    }
    33.3%{
        transform: translateX(-100%);
    }
    50%{
        transform: translateX(-100%);
    }
    66.6%{
        transform: translateX(-200%);
    }
    83.2%{
        transform: translateX(-200%);
    }
    100%{
        transform: translateX(0);
    }
`;

const SliderContent = styled.div`
  min-width: 100%;
  animation: ${sliderAnime} 6s ease-in-out infinite;
`;

const Image = styled.img`
  max-width: 100%;
  min-width: 100%;
`;

const Slider2 = () => {
  return (
    <SliderContainer>
      <SliderContent>
        <Image
          src="https://gorigoricode.com/wp-content/uploads/2022/04/husky01.jpg"
          alt="slider_image1"
        />
      </SliderContent>
      <SliderContent>
        <Image
          src="https://gorigoricode.com/wp-content/uploads/2022/04/husky05.jpg"
          alt="slider_image2"
        />
      </SliderContent>
      <SliderContent>
        <Image
          src="https://gorigoricode.com/wp-content/uploads/2022/04/husky06.jpg"
          alt="slider_image3"
        />
      </SliderContent>
    </SliderContainer>
  );
};

export default Slider2;
