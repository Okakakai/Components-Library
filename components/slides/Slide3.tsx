import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  /* Add wrapper styles if necessary */
`;

const Hero = styled.div`
  height: 400px;
  overflow: hidden;
  position: relative;
`;

const HeroInner = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const HeroSlide = styled.ul`
  /* Add hero-slide styles if necessary */
`;

const HeroSlideItem = styled.li`
  bottom: 0;
  height: 100%;
  position: absolute;
  right: -10%;
  width: 110%;
`;

const slideAnime = keyframes`
    0% {
      opacity: 0;
      
    }
  
    16% {
      opacity: 1;
    }
  
    33% {
      opacity: 1;
    }
  
    49% {
      opacity: 0;
    }
  
    100% {
        scale: 1.0;
      opacity: 0;
      /* transform: translateX(-10%); */
    }
`;

const HeroSlideImage = styled.img`
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-name: ${slideAnime};
  animation-timing-function: ease;
  display: block;
  object-fit: cover;
  opacity: 0;
  scale: 1.2;
  width: 100%;
`;

const FirstHeroSlideImage = styled(HeroSlideImage)`
  animation-delay: 0s;
`;

const SecondHeroSlideImage = styled(HeroSlideImage)`
  animation-delay: 5s;
`;

const ThirdHeroSlideImage = styled(HeroSlideImage)`
  animation-delay: 10s;
`;

const HeroTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 45%;
  /* transform: translateY(-50%); */
  width: 100%;
`;

const Slider3 = () => {
  return (
    <Wrapper>
      <Hero>
        <HeroInner>
          <HeroSlide>
            <HeroSlideItem>
              <FirstHeroSlideImage
                src="https://gorigoricode.com/wp-content/uploads/2022/04/husky01.jpg"
                alt=""
              />
            </HeroSlideItem>
            <HeroSlideItem>
              <SecondHeroSlideImage
                src="https://gorigoricode.com/wp-content/uploads/2022/04/husky05.jpg"
                alt=""
              />
            </HeroSlideItem>
            <HeroSlideItem>
              <ThirdHeroSlideImage
                src="https://gorigoricode.com/wp-content/uploads/2022/04/husky06.jpg"
                alt=""
              />
            </HeroSlideItem>
          </HeroSlide>
          <HeroTitle>SLIDESHOW ANIMATION</HeroTitle>
        </HeroInner>
      </Hero>
    </Wrapper>
  );
};

export default Slider3;
